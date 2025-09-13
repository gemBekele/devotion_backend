import { Request, Response, NextFunction } from "express";
import prisma from "../prisma";

// Middleware to validate token and attach session/user
export async function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log("🔐 AUTHENTICATION CHECK");
    
    // Extract the session token from headers or cookies
    const authHeader = req.headers.authorization;
    const cookieHeader = req.headers.cookie;
    
    let token = null;
    
    // Try to get token from Authorization header
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];
      console.log("   ✅ Token found in Authorization header");
    }
    
    // Try to get token from cookie if not found in header
    if (!token && cookieHeader) {
      const cookieMatch = cookieHeader.match(/devetionmobile_session=([^;]+)/);
      if (cookieMatch) {
        token = cookieMatch[1];
        console.log("   ✅ Token found in Cookie");
      }
    }
    
    if (!token) {
      console.log("   ❌ No authentication token found");
      return res.status(401).json({ error: "No authentication token provided" });
    }
    
    console.log("   🔍 Validating session...");
    
    // Direct database lookup for the session token
    // This is more reliable than trying to use Better Auth's complex validation
    let session;
    try {
      const sessionRecord = await prisma.session.findUnique({
        where: { token },
        include: {
          user: true
        }
      });
      
      if (sessionRecord && sessionRecord.expiresAt > new Date()) {
        console.log("   ✅ Valid session found in database");
        session = {
          user: sessionRecord.user,
          session: sessionRecord
        };
      } else {
        console.log("   ❌ Session not found or expired");
      }
    } catch (error: any) {
      console.log("   ❌ Database error:", error.message);
    }
    
    if (!session) {
      console.log("   ❌ Session validation failed");
      return res.status(401).json({ error: "Authentication required" });
    }

    console.log("   ✅ Authentication successful");
    console.log(`   👤 User: ${session.user.name} (${session.user.email})`);
    
    req.user = session.user;
    req.session = session.session;
    next();
  } catch (error: any) {
    console.error("   ❌ Authentication error:", error.message);
    res
      .status(500)
      .json({ error: "Authentication failed", details: error.message });
  }
}

// Create a prayer request
export async function createPrayerRequest(req: Request, res: Response) {
  try {
    if (!req.body) {
      return res.status(400).json({ error: "Missing request body" });
    }

    const { title, description, isAnonymous } = req.body;
    const userId = req.user?.id;

    if (!title || !description || !userId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const prayerRequest = await prisma.prayerRequest.create({
      data: {
        title: title.trim(),
        description: description.trim(),
        isAnonymous: Boolean(isAnonymous),
        user: {
          connect: { id: userId },
        },
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        prayers: true,
      },
    });

    return res.status(201).json(prayerRequest);
  } catch (error: any) {
    console.error("Error creating prayer request:", error);
    res.status(500).json({
      error: "Failed to create prayer request",
      details: error.message,
    });
  }
}

// Get all prayer requests with search functionality
export async function getPrayerRequests(req: Request, res: Response) {
  try {
    const { search, status, limit = "20", offset = "0" } = req.query;

    // Build the where clause dynamically
    const where: any = {};

    if (search && typeof search === "string") {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
        { user: { name: { contains: search, mode: "insensitive" } } },
      ];
    }

    if (status && typeof status === "string") {
      where.status = status;
    } else {
      // Only show active prayer requests by default
      where.status = "active";
    }

    const prayerRequests = await prisma.prayerRequest.findMany({
      where,
      orderBy: {
        created_at: "desc",
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        prayers: {
          select: {
            id: true,
            userId: true,
            created_at: true,
          },
        },
      },
      take: parseInt(limit as string),
      skip: parseInt(offset as string),
    });

    // Update prayer count for each request (in case it's out of sync)
    const updatedPrayerRequests = prayerRequests.map((request) => ({
      ...request,
      prayerCount: request.prayers.length,
    }));

    return res.json(updatedPrayerRequests);
  } catch (error: any) {
    console.error("Error fetching prayer requests:", error);
    res.status(500).json({
      error: "Failed to fetch prayer requests",
      details: error.message,
    });
  }
}

// Get prayer request by ID
export async function getPrayerRequestById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Missing prayer request ID" });
    }

    const prayerRequest = await prisma.prayerRequest.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        prayers: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
              },
            },
          },
          orderBy: {
            created_at: "desc",
          },
        },
      },
    });

    if (!prayerRequest) {
      return res.status(404).json({ error: "Prayer request not found" });
    }

    return res.json({
      ...prayerRequest,
      prayerCount: prayerRequest.prayers.length,
    });
  } catch (error: any) {
    console.error("Error fetching prayer request by ID:", error);
    res.status(500).json({
      error: "Failed to fetch prayer request",
      details: error.message,
    });
  }
}

// Update prayer request (only by owner)
export async function updatePrayerRequest(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const userId = req.user?.id;

    if (!id) {
      return res.status(400).json({ error: "Missing prayer request ID" });
    }

    // Check if the prayer request exists and belongs to the user
    const existingRequest = await prisma.prayerRequest.findUnique({
      where: { id },
    });

    if (!existingRequest) {
      return res.status(404).json({ error: "Prayer request not found" });
    }

    if (existingRequest.userId !== userId) {
      return res.status(403).json({ error: "Not authorized to update this prayer request" });
    }

    // Build update data
    const updateData: any = {};
    if (title) updateData.title = title.trim();
    if (description) updateData.description = description.trim();
    if (status && ["active", "answered", "closed"].includes(status)) {
      updateData.status = status;
    }

    const updatedPrayerRequest = await prisma.prayerRequest.update({
      where: { id },
      data: updateData,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        prayers: true,
      },
    });

    return res.json({
      ...updatedPrayerRequest,
      prayerCount: updatedPrayerRequest.prayers.length,
    });
  } catch (error: any) {
    console.error("Error updating prayer request:", error);
    res.status(500).json({
      error: "Failed to update prayer request",
      details: error.message,
    });
  }
}

// Delete prayer request (only by owner)
export async function deletePrayerRequest(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!id) {
      return res.status(400).json({ error: "Missing prayer request ID" });
    }

    // Check if the prayer request exists and belongs to the user
    const existingRequest = await prisma.prayerRequest.findUnique({
      where: { id },
    });

    if (!existingRequest) {
      return res.status(404).json({ error: "Prayer request not found" });
    }

    if (existingRequest.userId !== userId) {
      return res.status(403).json({ error: "Not authorized to delete this prayer request" });
    }

    await prisma.prayerRequest.delete({
      where: { id },
    });

    return res.json({ message: "Prayer request deleted successfully" });
  } catch (error: any) {
    console.error("Error deleting prayer request:", error);
    res.status(500).json({
      error: "Failed to delete prayer request",
      details: error.message,
    });
  }
}

// Pray for a prayer request (add a prayer)
export async function prayForRequest(req: Request, res: Response) {
  try {
    const { id } = req.params; // Prayer request ID
    const userId = req.user?.id;

    if (!id) {
      return res.status(400).json({ error: "Missing prayer request ID" });
    }

    if (!userId) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    // Check if prayer request exists
    const prayerRequest = await prisma.prayerRequest.findUnique({
      where: { id },
    });

    if (!prayerRequest) {
      return res.status(404).json({ error: "Prayer request not found" });
    }

    if (prayerRequest.status !== "active") {
      return res.status(400).json({ error: "Cannot pray for inactive prayer requests" });
    }

    // Check if user has already prayed for this request
    const existingPrayer = await prisma.prayer.findUnique({
      where: {
        userId_prayerRequestId: {
          userId,
          prayerRequestId: id,
        },
      },
    });

    if (existingPrayer) {
      return res.status(400).json({ error: "You have already prayed for this request" });
    }

    // Create the prayer and update prayer count
    const [prayer, updatedPrayerRequest] = await prisma.$transaction([
      prisma.prayer.create({
        data: {
          userId,
          prayerRequestId: id,
        },
      }),
      prisma.prayerRequest.update({
        where: { id },
        data: {
          prayerCount: {
            increment: 1,
          },
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
          prayers: {
            select: {
              id: true,
              userId: true,
              created_at: true,
            },
          },
        },
      }),
    ]);

    return res.json({
      message: "Prayer added successfully",
      prayerRequest: {
        ...updatedPrayerRequest,
        prayerCount: updatedPrayerRequest.prayers.length,
      },
    });
  } catch (error: any) {
    console.error("Error adding prayer:", error);
    res.status(500).json({
      error: "Failed to add prayer",
      details: error.message,
    });
  }
}

// Get user's own prayer requests
export async function getMyPrayerRequests(req: Request, res: Response) {
  try {
    const userId = req.user?.id;
    const { status, limit = "20", offset = "0" } = req.query;

    if (!userId) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const where: any = { userId };

    if (status && typeof status === "string") {
      where.status = status;
    }

    const prayerRequests = await prisma.prayerRequest.findMany({
      where,
      orderBy: {
        created_at: "desc",
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        prayers: {
          select: {
            id: true,
            userId: true,
            created_at: true,
          },
        },
      },
      take: parseInt(limit as string),
      skip: parseInt(offset as string),
    });

    const updatedPrayerRequests = prayerRequests.map((request) => ({
      ...request,
      prayerCount: request.prayers.length,
    }));

    return res.json(updatedPrayerRequests);
  } catch (error: any) {
    console.error("Error fetching user's prayer requests:", error);
    res.status(500).json({
      error: "Failed to fetch prayer requests",
      details: error.message,
    });
  }
}
