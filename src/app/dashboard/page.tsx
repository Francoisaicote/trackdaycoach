'use client'

import { useState, useEffect } from 'react'
import { auth } from '@/utils/supabase'

interface Student {
  id: string
  name: string
  email: string
  lastSession?: string
  progress: 'beginner' | 'intermediate' | 'advanced'
  nextSession?: string
}

interface Session {
  id: string
  studentName: string
  date: string
  status: 'scheduled' | 'active' | 'completed'
  track: string
}

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [students, setStudents] = useState<Student[]>([
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      lastSession: '2024-01-15',
      progress: 'intermediate',
      nextSession: '2024-01-22'
    },
    {
      id: '2',
      name: 'Mike Chen',
      email: 'mike@example.com',
      lastSession: '2024-01-14',
      progress: 'beginner',
      nextSession: '2024-01-21'
    }
  ])
  const [sessions, setSessions] = useState<Session[]>([
    {
      id: '1',
      studentName: 'Sarah Johnson',
      date: '2024-01-22',
      status: 'scheduled',
      track: 'Montreal Circuit'
    },
    {
      id: '2',
      studentName: 'Mike Chen',
      date: '2024-01-21',
      status: 'scheduled',
      track: 'Montreal Circuit'
    }
  ])

  useEffect(() => {
    const checkUser = async () => {
      const { user } = await auth.getCurrentUser()
      setUser(user)
      setLoading(false)
    }
    checkUser()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please sign in</h1>
          <a href="/auth/signin" className="text-blue-600 hover:underline">
            Go to sign in page
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">TrackDayCoach</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user.email}</span>
              <button
                onClick={() => auth.signOut()}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold">{students.length}</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Active Students</dt>
                    <dd className="text-lg font-medium text-gray-900">{students.length}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold">{sessions.filter(s => s.status === 'scheduled').length}</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Upcoming Sessions</dt>
                    <dd className="text-lg font-medium text-gray-900">{sessions.filter(s => s.status === 'scheduled').length}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold">{sessions.filter(s => s.status === 'completed').length}</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Completed This Month</dt>
                    <dd className="text-lg font-medium text-gray-900">{sessions.filter(s => s.status === 'completed').length}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold">$</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Monthly Revenue</dt>
                    <dd className="text-lg font-medium text-gray-900">$2,400</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Students and Sessions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Students List */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">My Students</h3>
              <div className="space-y-4">
                {students.map((student) => (
                  <div key={student.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900">{student.name}</h4>
                        <p className="text-sm text-gray-500">{student.email}</p>
                        <div className="flex items-center mt-2">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            student.progress === 'beginner' ? 'bg-green-100 text-green-800' :
                            student.progress === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {student.progress}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Next session</p>
                        <p className="text-sm font-medium text-gray-900">{student.nextSession}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                Add New Student
              </button>
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Upcoming Sessions</h3>
              <div className="space-y-4">
                {sessions.filter(s => s.status === 'scheduled').map((session) => (
                  <div key={session.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900">{session.studentName}</h4>
                        <p className="text-sm text-gray-500">{session.track}</p>
                        <p className="text-sm text-gray-500">{session.date}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                          Start
                        </button>
                        <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">
                Schedule New Session
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 