This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Project Structure

```
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
│   ├── Navbar.tsx     # Navigation bar component
│   └── SignUpForm.tsx # Sign-up form component
├── 📁 lib             # Utility functions and configurations
│   ├── AuthButton.tsx # Authentication button component
│   └── appwrite.ts    # Appwrite client configuration
├── 📁 public          # Static files
└── 📁 .next           # Next.js build output
```

## Directory Structure Details

### Key Directories and Files

- **actions/**: Contains server actions for handling authentication flows.
  
- **app/**: The main application directory using Next.js 13+ App Router.
  - `api/`: API routes for server-side functionality
  - `sign-in/ & sign-up/`: Authentication-related pages
  - `layout.tsx`: Main layout wrapper for the application
  - `page.tsx`: Home page component

- **components/**: Reusable React components
  - `Navbar.tsx`: Navigation component with authentication status
  - `SignUpForm.tsx`: Form component for user registration

- **lib/**: Utility functions and configurations
  - `AuthButton.tsx`: Reusable authentication button component
  - `appwrite.ts`: Appwrite client setup and configuration

### Configuration Files

- `.env`: Environment variables configuration
- `next.config.ts`: Next.js configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
