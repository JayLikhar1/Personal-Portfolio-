import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { createEmailService } from "./email";

const emailService = createEmailService();

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact form endpoint
  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);

      // Send email notifications if email service is available
      if (emailService) {
        try {
          // Send notification to site owner
          await emailService.sendContactNotification(input.name, input.email, input.message);
          console.log("✅ Contact notification sent successfully");

          // Optionally send welcome email to the person who contacted
          if (emailService.sendWelcomeEmail) {
            await emailService.sendWelcomeEmail(input.email, input.name);
            console.log("✅ Welcome email sent successfully");
          }
        } catch (emailError) {
          console.error("❌ Error sending email notifications:", emailError);
          // Don't fail the request if email fails, as message is already saved
        }
      } else {
        console.warn("⚠️  Email service not configured, skipping notifications");
      }

      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      console.error("❌ Error processing contact form:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
