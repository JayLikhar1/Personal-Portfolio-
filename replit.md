# Portfolio Dashboard

## Overview

A personal portfolio website for Jay Likhar built as a modern dashboard-style UI. The application showcases skills, projects, certifications, and provides a contact form. Built with React frontend and Express backend using a full-stack TypeScript architecture.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **State Management**: TanStack React Query for server state and caching
- **Animations**: Framer Motion for page transitions and UI animations
- **Icons**: Lucide React for consistent iconography

### Backend Architecture
- **Framework**: Express.js 5.x running on Node.js
- **API Pattern**: RESTful endpoints defined in `shared/routes.ts` with Zod validation
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Type Safety**: Shared types and schemas between frontend and backend via `@shared` path alias

### Project Structure
```
├── client/           # React frontend application
│   └── src/
│       ├── components/   # UI components including shadcn/ui
│       ├── pages/        # Route pages (Dashboard, Skills, Projects, etc.)
│       ├── hooks/        # Custom React hooks
│       └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── routes.ts     # API route handlers
│   ├── storage.ts    # Database operations
│   └── db.ts         # Database connection
├── shared/           # Shared code between client and server
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # API route definitions with Zod schemas
```

### Data Flow
1. Frontend uses React Query mutations/queries to call API endpoints
2. Routes are type-safe using Zod schemas defined in `shared/routes.ts`
3. Server validates input with Zod and uses Drizzle ORM for database operations
4. Responses are typed end-to-end through shared schema definitions

### Build System
- Development: Vite dev server with HMR proxied through Express
- Production: Vite builds static assets, esbuild bundles server code
- Database migrations: Drizzle Kit with `db:push` command

## External Dependencies

### Database
- **PostgreSQL**: Primary database accessed via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries with automatic schema inference
- **connect-pg-simple**: Session storage for PostgreSQL (available but not currently used)

### UI Component Library
- **shadcn/ui**: Pre-built accessible components using Radix UI primitives
- **Radix UI**: Headless component primitives for dialogs, dropdowns, tooltips, etc.
- **class-variance-authority**: Component variant management

### Development Tools
- **Replit Plugins**: Runtime error overlay, cartographer, and dev banner for Replit environment
- **TypeScript**: Strict mode enabled with path aliases configured