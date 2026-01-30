import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact form endpoint
  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);

      if (resend) {
        try {
          await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "jaylikhar9@gmail.com",
            subject: `New Contact Form Message from ${input.name}`,
            html: `
              <h2>New Message Received</h2>
              <p><strong>Name:</strong> ${input.name}</p>
              <p><strong>Email:</strong> ${input.email}</p>
              <p><strong>Message:</strong></p>
              <p>${input.message}</p>
            `,
          });
        } catch (emailError) {
          console.error("Error sending email:", emailError);
          // Don't fail the request if email fails, as message is already saved
        }
      } else {
        console.warn("RESEND_API_KEY not set, skipping email notification");
      }

      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
