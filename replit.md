# Replit.md

## Overview

This is a full-stack web application built as a portfolio/landing page for an AI-powered mobile app developer. The application features a modern React frontend with a Node.js/Express backend, designed to showcase services, projects, testimonials, and provide a contact form for potential clients.

## User Preferences

Preferred communication style: Simple, everyday language.
Focus: Revenue-focused AI applications rather than just delivering lines of code
Contact preferences: Response time within 1 hour, mobile: +91-8160695327, email: dhruvildhanani8639@gmail.com
AI Integration: Tawk.to chat support for client interaction

## System Architecture

### Frontend Architecture
The frontend is built using React with TypeScript, leveraging modern web technologies:
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture  
The backend follows a RESTful API pattern using Express.js:
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL support
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Validation**: Zod schemas for type-safe data validation
- **Session Storage**: PostgreSQL-based session storage with connect-pg-simple

### Database Schema
The application uses PostgreSQL with two main tables:
- **users**: Basic user authentication (id, username, password)
- **contact_messages**: Stores contact form submissions (id, name, email, subject, message, created_at)

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation bar with smooth scrolling between sections
- **Hero Section**: Landing area with professional introduction and call-to-action
- **About Section**: Personal background and expertise overview
- **Skills Section**: Categorized technical skills display
- **Projects Section**: Portfolio showcase with project metrics
- **Testimonials Section**: Client testimonials with ratings
- **Contact Section**: Contact form with real-time validation
- **Footer**: Additional contact information and site links

### Backend Components
- **Routes**: RESTful API endpoints for contact form submission
- **Storage**: Abstracted storage layer with in-memory implementation (ready for database integration)
- **Validation**: Zod schema validation for contact form data
- **Error Handling**: Centralized error handling middleware

## Data Flow

1. **Client Interaction**: User interacts with React frontend components
2. **Form Submission**: Contact form data is validated client-side using React Hook Form
3. **API Request**: Validated data is sent to Express backend via TanStack React Query
4. **Server Validation**: Backend validates data using Zod schemas
5. **Data Storage**: Contact messages are stored in PostgreSQL database
6. **Response**: Success/error responses are sent back to client
7. **UI Feedback**: Toast notifications inform user of submission status

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives for accessible component foundation
- **Styling**: Tailwind CSS for utility-first styling approach
- **Icons**: Lucide React for consistent iconography
- **Animation**: Framer Motion for performant animations
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Date Handling**: date-fns for date manipulation utilities

### Backend Dependencies
- **Database**: Neon Database for serverless PostgreSQL hosting
- **ORM**: Drizzle ORM for type-safe database queries
- **Validation**: Zod for runtime type checking and validation
- **Session Management**: connect-pg-simple for PostgreSQL session storage

### Development Dependencies
- **Build Tools**: Vite with React plugin for fast development
- **TypeScript**: Full TypeScript support across frontend and backend
- **Code Quality**: TSC for type checking
- **Replit Integration**: Specialized plugins for Replit development environment

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite development server with hot module replacement
- **Backend**: Express server with TypeScript compilation via tsx
- **Database**: Neon Database connection via environment variables
- **Environment**: Replit-optimized development workflow

### Production Build
- **Frontend**: Vite production build with optimized static assets
- **Backend**: ESBuild compilation to ESM format for Node.js deployment
- **Database**: Production PostgreSQL database with Drizzle migrations
- **Static Assets**: Frontend build output served from Express static middleware

### Recent Changes (Jan 31, 2025)

1. **Real Projects Integration**: Updated projects section with actual client work:
   - AI-Enhanced Dating Application (video/audio calls, live streaming, wallet, admin panel)
   - Audiobulb Music Distribution Platform (80+ streaming platforms, AI analytics)
   - Enjoy With English Language Learning App (AI speech recognition, personalized learning)

2. **Authentic Testimonials**: Added real client testimonial from Ankit Sharma (Audiobulb project)

3. **AI Chat Integration**: Implemented Tawk.to chat support (ID: 688af7ae9c4b3719280d204f/1j1fdf0kl)

4. **Revenue-Focused Messaging**: Updated all content to emphasize business results over technical implementation

5. **Profile Image Integration**: Used client's actual professional headshot throughout the portfolio

### Key Architectural Decisions

1. **Monorepo Structure**: Shared types and schemas between frontend and backend for type safety
2. **Database Choice**: PostgreSQL selected for reliability and ACID compliance
3. **ORM Selection**: Drizzle chosen for its TypeScript-first approach and performance
4. **UI Framework**: shadcn/ui selected for accessible, customizable components
5. **State Management**: TanStack React Query chosen for server state management and caching
6. **Build Strategy**: Separate frontend and backend builds with shared TypeScript configuration
7. **Session Storage**: PostgreSQL-based sessions for scalability and persistence
8. **AI Integration**: Tawk.to for client support, AI keywords throughout content for SEO

The application is designed to be easily deployable to various platforms while maintaining development efficiency through modern tooling and type safety throughout the stack.