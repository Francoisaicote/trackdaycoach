# TrackDayCoach Setup Guide

## 🚀 Quick Setup

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - **Name**: `trackdaycoach`
   - **Database Password**: Choose a strong password
   - **Region**: Choose closest to you
5. Click "Create new project"

### 2. Get Your Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (starts with `https://`)
   - **anon public** key (starts with `eyJ`)

### 3. Create Environment File

Create a file called `.env.local` in your project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Start the App

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 🔐 Authentication Setup

### Enable Email Auth

1. In Supabase dashboard, go to **Authentication** → **Providers**
2. Make sure **Email** is enabled
3. Configure email templates if desired

### Test Authentication

1. Go to [http://localhost:3000/auth/signup](http://localhost:3000/auth/signup)
2. Create a test account
3. Check your email for confirmation
4. Sign in at [http://localhost:3000/auth/signin](http://localhost:3000/auth/signin)

## 📊 Database Setup (Next Steps)

When you're ready to add real data:

1. Install Prisma: `npm install prisma @prisma/client`
2. Initialize: `npx prisma init`
3. Configure your schema
4. Push to database: `npx prisma db push`

## 🎯 What's Working Now

✅ **Landing Page** - Professional homepage  
✅ **Sign Up** - User registration with email verification  
✅ **Sign In** - User authentication  
✅ **Dashboard** - Protected user dashboard  
✅ **Navigation** - Dynamic navigation based on auth state  
✅ **Session Management** - Automatic login/logout  

## 🚧 Next Features to Build

- [ ] Instructor profiles
- [ ] Session booking system
- [ ] Progress tracking
- [ ] Payment integration
- [ ] Admin dashboard

## 🆘 Troubleshooting

### "Missing script: dev"
- Make sure you're in the `trackdaycoach` directory
- Run `cd trackdaycoach` first

### Authentication errors
- Check your `.env.local` file has correct Supabase credentials
- Verify your Supabase project is active
- Check browser console for detailed error messages

### Port already in use
- The app will automatically use the next available port (3001, 3002, etc.)
- Check the terminal output for the correct URL 