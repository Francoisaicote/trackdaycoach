'use client'

import { useEffect, useState } from 'react'
import { auth } from '@/utils/supabase'

export default function Home() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkUser = async () => {
      const { user } = await auth.getCurrentUser()
      setUser(user)
      setLoading(false)
      
      // Redirect based on authentication status
      if (user) {
        window.location.href = '/dashboard'
      } else {
        window.location.href = '/auth/signin'
      }
    }
    checkUser()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading TrackDayCoach...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-xl">Redirecting...</div>
    </div>
  )
} 