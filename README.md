# Lookym Authentication with Appwrite and Next.js 15

This is a modern authentication system built with [Next.js](https://nextjs.org) 15 and [Appwrite](https://appwrite.io), featuring real-time state management and a beautiful UI.

## Features

- 🔐 **Robust Authentication System**
  - Email & Password authentication
  - Real-time authentication state updates
  - Cross-tab session synchronization
  - Secure session management

- 🎨 **Modern UI/UX**
  - Responsive design with Tailwind CSS
  - Beautiful gradient effects
  - Loading states and animations
  - Immediate user feedback

- 🛠️ **Technical Features**
  - Next.js 15 App Router
  - Server Actions
  - Client-side navigation
  - TypeScript support
  - Appwrite Backend

## Getting Started

First, set up your environment variables:

1. Create a `.env` file in the root directory with your Appwrite credentials:
```env
APPWRITE_ENDPOINT=your-appwrite-endpoint
APPWRITE_PROJECT=your-project-id
APPWRITE_KEY=your-api-key
DATABASE_ID=your-database-id
USERS_COLLECTION_ID=your-users-collection-id
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

📦 appwrite-auth-nextjs15
├── 📁 actions           # Server actions for handling authentication
├── 📁 app              # Next.js app directory (App Router)
│   ├── 📁 api         # API routes
│   ├── 📁 fonts       # Custom fonts configuration
│   ├── 📁 middleware  # Middleware configurations
│   ├── 📁 server      # Server-side utilities
│   ├── 📁 sign-in     # Sign-in page and related components
│   ├── 📁 sign-up     # Sign-up page and related components
│   ├── layout.tsx     # Root layout component
│   ├── page.tsx       # Home page component
│   └── globals.css    # Global styles
├── 📁 components      # Reusable React components
│   ├── Navbar.tsx     # Navigation bar with auth state
│   ├── LoginForm.tsx  # Sign-in form component
│   ├── SignUpForm.tsx # Sign-up form component
│   └── Logout.tsx     # Logout component with real-time updates
├── 📁 lib             # Utility functions and configurations
│   ├── AuthButton.tsx # Authentication button component
│   └── appwrite.ts    # Appwrite client configuration
└── 📁 public          # Static files

## Recent Updates

### Authentication Improvements
- Added real-time authentication state updates in Navbar
- Implemented cross-tab session synchronization
- Improved logout functionality with immediate feedback
- Added loading states and better error handling

### UI/UX Enhancements
- Modernized component layouts
- Added gradient effects to buttons and text
- Improved responsive design
- Enhanced loading and error states

### Technical Updates
- Updated to Next.js 15
- Improved TypeScript types
- Enhanced server actions
- Better error handling

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Appwrite Documentation](https://appwrite.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
