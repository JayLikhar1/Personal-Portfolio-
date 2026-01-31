import "dotenv/config";
import { createEmailService } from "./email";

async function testEmailService() {
  console.log("🧪 Testing email service...");
  
  const emailService = createEmailService();
  
  if (!emailService) {
    console.error("❌ Email service not configured");
    return;
  }

  try {
    // Test contact notification
    await emailService.sendContactNotification(
      "Test User",
      "test@example.com",
      "This is a test message from the email integration test."
    );
    console.log("✅ Contact notification test passed");

    // Test welcome email if available
    if (emailService.sendWelcomeEmail) {
      await emailService.sendWelcomeEmail("test@example.com", "Test User");
      console.log("✅ Welcome email test passed");
    }

    console.log("🎉 All email tests passed!");
  } catch (error) {
    console.error("❌ Email test failed:", error);
  }
}

// Run the test
testEmailService().catch(console.error);