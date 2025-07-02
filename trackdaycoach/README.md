# TrackDayCoach

A modern web application for connecting track day enthusiasts with professional racing instructors.

## Features

- 🔐 **Authentication** - Sign up, sign in, and secure user sessions
- 📊 **Dashboard** - Track your progress and upcoming sessions
- 👨‍🏫 **Instructor Profiles** - Find and connect with certified instructors
- 📅 **Session Booking** - Schedule coaching sessions
- 📈 **Progress Tracking** - Monitor your improvement over time

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **ORM**: Prisma (ready to set up)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to Settings > API to get your credentials

3. **Create environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── auth/              # Authentication pages
│   │   ├── signin/        # Sign in page
│   │   └── signup/        # Sign up page
│   ├── dashboard/         # User dashboard
│   └── page.tsx           # Landing page
├── components/            # Reusable components
│   └── ProtectedRoute.tsx # Auth protection component
├── contexts/              # React contexts
│   └── AuthContext.tsx    # Authentication context
└── lib/                   # Utility libraries
    └── supabase.ts        # Supabase client
```

## Authentication Flow

1. **Sign Up**: Users create accounts with email/password
2. **Email Verification**: Supabase sends confirmation emails
3. **Sign In**: Users authenticate with credentials
4. **Protected Routes**: Dashboard requires authentication
5. **Session Management**: Automatic session persistence

## Next Steps

- [ ] Set up Prisma with PostgreSQL
- [ ] Create instructor profiles
- [ ] Implement session booking
- [ ] Add progress tracking
- [ ] Build admin dashboard
- [ ] Add payment integration

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
