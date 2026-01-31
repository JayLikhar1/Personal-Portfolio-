import { Resend } from "resend";

export interface EmailService {
  sendContactNotification(name: string, email: string, message: string): Promise<void>;
  sendWelcomeEmail?(email: string, name: string): Promise<void>;
}

export class ResendEmailService implements EmailService {
  private resend: Resend;
  private fromEmail: string;
  private toEmail: string;

  constructor(apiKey: string, fromEmail = "Portfolio Contact <onboarding@resend.dev>", toEmail = "jaylikhar9@gmail.com") {
    this.resend = new Resend(apiKey);
    this.fromEmail = fromEmail;
    this.toEmail = toEmail;
  }

  async sendContactNotification(name: string, email: string, message: string): Promise<void> {
    const emailHtml = this.createContactEmailTemplate(name, email, message);
    
    await this.resend.emails.send({
      from: this.fromEmail,
      to: [this.toEmail],
      replyTo: email,
      subject: `🚀 New Portfolio Message from ${name}`,
      html: emailHtml,
    });
  }

  async sendWelcomeEmail(email: string, name: string): Promise<void> {
    const emailHtml = this.createWelcomeEmailTemplate(name);
    
    await this.resend.emails.send({
      from: this.fromEmail,
      to: [email],
      subject: `Thanks for reaching out, ${name}!`,
      html: emailHtml,
    });
  }

  private createContactEmailTemplate(name: string, email: string, message: string): string {
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Message</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; border: 1px solid #ddd; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
    .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border: 1px solid #eee; }
    .message-content { white-space: pre-wrap; }
    .footer { margin-top: 20px; padding: 15px; background: #f0f0f0; border-radius: 4px; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="header">
    <h1>📧 New Contact Form Message</h1>
    <p>You've received a new message from your portfolio website!</p>
  </div>
  <div class="content">
    <div class="field">
      <div class="label">👤 Name:</div>
      <div class="value">${name}</div>
    </div>
    <div class="field">
      <div class="label">📧 Email:</div>
      <div class="value">${email}</div>
    </div>
    <div class="field">
      <div class="label">💬 Message:</div>
      <div class="value message-content">${message}</div>
    </div>
  </div>
  <div class="footer">
    <p>💡 You can reply directly to this email to respond to ${name}.</p>
    <p>This message was sent from your portfolio contact form.</p>
  </div>
</body>
</html>
    `;
  }

  private createWelcomeEmailTemplate(name: string): string {
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thanks for reaching out!</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; border: 1px solid #ddd; }
    .footer { margin-top: 20px; padding: 15px; background: #f0f0f0; border-radius: 4px; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="header">
    <h1>👋 Thanks for reaching out, ${name}!</h1>
  </div>
  <div class="content">
    <p>Hi ${name},</p>
    <p>Thank you for taking the time to reach out through my portfolio! I've received your message and will get back to you as soon as possible.</p>
    <p>I appreciate your interest and look forward to connecting with you.</p>
    <p>Best regards,<br>Jay</p>
  </div>
  <div class="footer">
    <p>This is an automated response to confirm receipt of your message.</p>
  </div>
</body>
</html>
    `;
  }
}

export class MockEmailService implements EmailService {
  async sendContactNotification(name: string, email: string, message: string): Promise<void> {
    console.log(`📧 [MOCK] Contact notification would be sent:`);
    console.log(`   From: ${name} (${email})`);
    console.log(`   Message: ${message}`);
  }

  async sendWelcomeEmail(email: string, name: string): Promise<void> {
    console.log(`📧 [MOCK] Welcome email would be sent to: ${name} (${email})`);
  }
}

// Factory function to create email service based on environment
export function createEmailService(): EmailService | null {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.warn("⚠️  RESEND_API_KEY not configured");
    return null;
  }

  if (process.env.NODE_ENV === "development" && process.env.USE_MOCK_EMAIL === "true") {
    return new MockEmailService();
  }

  const fromEmail = process.env.FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";
  const toEmail = process.env.TO_EMAIL || "jaylikhar9@gmail.com";

  return new ResendEmailService(apiKey, fromEmail, toEmail);
}