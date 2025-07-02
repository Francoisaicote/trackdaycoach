import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST() {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: 'test@trackdaycoach.com',
      password: 'testpassword123',
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ 
      message: 'Test user created successfully',
      user: data.user,
      session: data.session 
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create test user' }, { status: 500 });
  }
} 