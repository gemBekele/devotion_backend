import { Request, Response } from "express";
import prisma from "../prisma";

// Create a counseling request
export async function createCounselingRequest(req: Request, res: Response) {
  try {
    if (!req.body) {
      return res.status(400).json({ error: "Missing request body" });
    }

    const {
      subject,
      message,
      urgency = "normal",
      isAnonymous = false,
    } = req.body;
    const userId = req.user?.id;

    if (!subject || !message || !userId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const counselingRequest = await prisma.counselingRequest.create({
      data: {
        subject,
        message,
        urgency,
        isAnonymous,
        userId,
      },
    });

    return res.status(201).json(counselingRequest);
  } catch (error: any) {
    console.error("Error creating counseling request:", error);
    res
      .status(500)
      .json({ error: "Failed to create counseling request", details: error.message });
  }
}

// Get user's counseling requests
export async function getUserCounselingRequests(req: Request, res: Response) {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Authentication required" });
    }

    const counselingRequests = await prisma.counselingRequest.findMany({
      where: {
        userId: req.user.id,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return res.json(counselingRequests);
  } catch (error: any) {
    console.error("Error fetching counseling requests:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch counseling requests", details: error.message });
  }
}

// Get all counseling requests (admin only)
export async function getAllCounselingRequests(req: Request, res: Response) {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Authentication required" });
    }

    // Check if user is admin
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { role: true }
    });

    if (user?.role !== "admin") {
      return res.status(403).json({ error: "Admin access required" });
    }

    const counselingRequests = await prisma.counselingRequest.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return res.json(counselingRequests);
  } catch (error: any) {
    console.error("Error fetching all counseling requests:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch counseling requests", details: error.message });
  }
}

// Update counseling request status (admin only)
export async function updateCounselingRequestStatus(req: Request, res: Response) {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Authentication required" });
    }

    // Check if user is admin
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { role: true }
    });

    if (user?.role !== "admin") {
      return res.status(403).json({ error: "Admin access required" });
    }

    const { id } = req.params;
    const { status, response } = req.body;

    if (!id || !status) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const counselingRequest = await prisma.counselingRequest.update({
      where: { id },
      data: {
        status,
        response: response || null,
      },
    });

    return res.json(counselingRequest);
  } catch (error: any) {
    console.error("Error updating counseling request:", error);
    res
      .status(500)
      .json({ error: "Failed to update counseling request", details: error.message });
  }
}
