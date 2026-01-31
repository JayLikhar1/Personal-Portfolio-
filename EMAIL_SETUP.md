# Email Integration Setup

This project uses [Resend](https://resend.com) for sending emails from the contact form.

## Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
RESEND_API_KEY=your_resend_api_key_here
FROM_EMAIL="Portfolio Contact <onboarding@resend.dev>"
TO_EMAIL="your-email@example.com"

# Development Settings
# USE_MOCK_EMAIL=true  # Uncomment to use mock email service in development
```

### Getting a Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Go to your dashboard
3. Create a new API key
4. Copy the API key to your `.env` file

## Features

### Contact Form Notifications
- Sends beautifully formatted HTML emails when someone submits the contact form
- Includes sender's name, email, and message
- Allows direct reply to the sender
- Professional email template with responsive design

### Welcome Emails (Optional)
- Automatically sends a thank you email to people who contact you
- Confirms receipt of their message
- Professional and friendly tone

### Error Handling
- Graceful fallback if email service is unavailable
- Contact form submissions are still saved even if email fails
- Detailed logging for debugging

### Development Mode
- Set `USE_MOCK_EMAIL=true` to use console logging instead of sending real emails
- Useful for testing without consuming API quota

## Testing

Run the email test script to verify your configuration:

```bash
npx tsx server/test-email.ts
```

## Email Templates

The email service includes two types of templates:

1. **Contact Notification**: Sent to you when someone fills out the contact form
2. **Welcome Email**: Sent to the person who contacted you (optional)

Both templates are responsive and professionally designed with:
- Clean HTML structure
- Inline CSS for maximum compatibility
- Proper encoding and meta tags
- Professional styling with gradients and proper spacing

## API Endpoints

### POST /api/messages
Handles contact form submissions and triggers email notifications.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to discuss a project..."
}
```

**Response:**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to discuss a project...",
  "createdAt": "2024-01-01T12:00:00.000Z"
}
```

## Troubleshooting

### Common Issues

1. **"RESEND_API_KEY not configured"**
   - Make sure your `.env` file exists and contains the API key
   - Verify the API key is correct and active

2. **Emails not being sent**
   - Check the console for error messages
   - Verify your Resend account has sufficient quota
   - Test with the provided test script

3. **Invalid sender domain**
   - Resend requires verified domains for production use
   - Use `onboarding@resend.dev` for testing
   - Add and verify your own domain in Resend dashboard for production

### Logs

The application provides detailed logging:
- ✅ Success messages when emails are sent
- ❌ Error messages with details when emails fail
- ⚠️ Warnings when email service is not configured

## Production Considerations

1. **Domain Verification**: Verify your sending domain in Resend for better deliverability
2. **Rate Limits**: Be aware of Resend's rate limits and plan accordingly
3. **Error Monitoring**: Consider adding error tracking for email failures
4. **Backup Notifications**: Consider alternative notification methods (Slack, Discord, etc.)