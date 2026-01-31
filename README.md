# Personal Portfolio Website

A modern, enterprise-style portfolio dashboard built with React, TypeScript, and Express with integrated email functionality.

## ✨ Features

### 🎨 **Frontend**
- **Dashboard-style UI**: Professional, clean, and data-driven design
- **Projects Showcase**: Detailed project cards with live demo and GitHub links
- **Skills Management**: Grouped technical skills categorization
- **Certifications**: Professional credentials with verification links
- **Theme Support**: Dark and light mode toggle with smooth transitions
- **Responsive Design**: Mobile-first approach with optimized layouts

### 📧 **Email Integration**
- **Contact System**: Full-stack contact form with real-time validation
- **Email Notifications**: Instant notifications via Resend API
- **Professional Templates**: Beautiful HTML email templates with responsive design
- **Auto-Reply System**: Welcome emails sent to visitors automatically
- **Error Handling**: Graceful fallback if email service is unavailable

### 🚀 **Performance**
- **Optimized Bundles**: Code splitting reduces main bundle from 518KB to 107KB
- **Vendor Chunking**: Separate chunks for better caching and loading
- **Hot Reload**: Fast development with Vite HMR
- **TypeScript**: Full type safety across the entire stack

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Full type safety and better developer experience
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components
- **Framer Motion** - Smooth animations and transitions
- **React Query** - Server state management and caching
- **React Hook Form** - Performant forms with easy validation

### **Backend**
- **Express.js** - Fast, unopinionated web framework
- **TypeScript** - Type-safe server-side development
- **Zod** - Runtime type validation and parsing
- **In-Memory Storage** - Simple message storage for contact forms

### **Email & Integrations**
- **Resend** - Modern email API for transactional emails
- **Professional Templates** - Custom HTML email templates
- **Environment Configuration** - Flexible setup for different environments

### **Development & Build**
- **ESBuild** - Fast JavaScript bundler for production
- **Cross-env** - Cross-platform environment variables
- **TSX** - TypeScript execution for development

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Resend API key (sign up at [resend.com](https://resend.com))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JayLikhar1/Personal-Portfolio-.git
   cd Personal-Portfolio-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   FROM_EMAIL="Portfolio Contact <onboarding@resend.dev>"
   TO_EMAIL="your-email@example.com"
   
   # Development Settings (optional)
   # USE_MOCK_EMAIL=true
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5000`

### Production Build

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📧 Email Setup

The project includes comprehensive email functionality. See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed configuration instructions.

### Quick Email Test
```bash
# Test email configuration
npx tsx server/test-email.ts
```

## 🏗️ Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
├── server/                 # Backend Express application
│   ├── email.ts           # Email service implementation
│   ├── routes.ts          # API route handlers
│   ├── static.ts          # Static file serving
│   └── index.ts           # Server entry point
├── shared/                 # Shared types and schemas
└── dist/                   # Production build output
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type check with TypeScript
- `npx tsx server/test-email.ts` - Test email functionality

## 🌟 Key Features Explained

### Email System
- **Contact Form**: Visitors can send messages through a beautiful contact form
- **Instant Notifications**: You receive professional HTML emails immediately
- **Auto-Reply**: Visitors get a thank you email confirming receipt
- **Error Resilience**: Contact form works even if email service is down

### Performance Optimizations
- **Code Splitting**: Automatic vendor chunk separation
- **Bundle Analysis**: Optimized bundle sizes for faster loading
- **Caching Strategy**: Efficient caching with proper chunk naming

### Developer Experience
- **Hot Reload**: Instant feedback during development
- **Type Safety**: Full TypeScript coverage
- **Error Handling**: Comprehensive error boundaries and logging
- **Testing Utilities**: Built-in email testing tools

## 🚀 Deployment

The project is configured for easy deployment on platforms like:
- **Vercel** (recommended)
- **Netlify**
- **Railway**
- **Heroku**

Make sure to set your environment variables in your deployment platform.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Jay Likhar**
- 🌐 Portfolio: [Your Portfolio URL]
- 💼 [LinkedIn](https://linkedin.com/in/jay-likhar)
- 🐱 [GitHub](https://github.com/jaylikhar1)
- 📸 [Instagram](https://www.instagram.com/jayylikhar/)
- 📧 Email: jaylikhar9@gmail.com

---

⭐ **If you found this project helpful, please give it a star!** ⭐
