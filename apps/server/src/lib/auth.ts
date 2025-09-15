import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { expo } from "@better-auth/expo";
import prisma from "../../prisma/index.js";

export const auth: any = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  plugins: [expo({ overrideOrigin: true })],
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: ["devetionmobile://", process.env.CORS_ORIGIN || ""],
});
