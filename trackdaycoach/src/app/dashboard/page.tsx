'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/auth/signin');
    }
  }, [user, router]);

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">TrackDay Coach</div>
            <nav className="nav">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/test-auth" className="nav-link">Test Auth</Link>
              <button
                onClick={handleSignOut}
                className="btn btn-secondary"
              >
                Sign Out
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="container">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <h1 className="mb-4">
              Welcome to your dashboard
            </h1>
            <p className="text-lg">
              Ready to improve your track performance? Let&apos;s find your next instructor.
            </p>
          </div>

          {/* Performance Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="card text-center">
              <div className="text-4xl mb-4">🏁</div>
              <h3 className="card-title">Fastest Lap</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">1:23.456</div>
              <div className="text-gray-600 mb-4">Circuit Gilles Villeneuve</div>
              <div className="text-green-600 font-semibold">
                +2.3s improvement
              </div>
            </div>

            <div className="card text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="card-title">Top Speed</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">185</div>
              <div className="text-gray-600 mb-4">km/h</div>
              <div className="text-green-600 font-semibold">
                +12 km/h gain
              </div>
            </div>

            <div className="card text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="card-title">Sessions</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">24</div>
              <div className="text-gray-600 mb-4">This month</div>
              <div className="text-blue-600 font-semibold">
                85% consistency
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="card group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="card-title">Find Instructor</h3>
                  <p className="mb-4">
                    Connect with experienced racing instructors for personalized coaching.
                  </p>
                  <div className="inline-flex items-center text-blue-600 font-semibold">
                    <span>Browse instructors</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="text-4xl">👨‍🏫</div>
              </div>
            </div>

            <div className="card group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="card-title">View Analytics</h3>
                  <p className="mb-4">
                    Analyze your lap times and performance data with detailed insights.
                  </p>
                  <div className="inline-flex items-center text-blue-600 font-semibold">
                    <span>Open analytics</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="text-4xl">📈</div>
              </div>
            </div>

            <div className="card group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="card-title">Book Session</h3>
                  <p className="mb-4">
                    Schedule your next track day coaching session with available instructors.
                  </p>
                  <div className="inline-flex items-center text-blue-600 font-semibold">
                    <span>Book now</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="text-4xl">📅</div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card">
            <h3 className="card-title mb-6">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Session Completed</div>
                    <div className="text-sm text-gray-600">Circuit Gilles Villeneuve - 1:23.456</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">2 hours ago</div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Instructor Booked</div>
                    <div className="text-sm text-gray-600">John Smith - Advanced Coaching</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">1 day ago</div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-gray-900">New Personal Best</div>
                    <div className="text-sm text-gray-600">Improved lap time by 1.2 seconds</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">3 days ago</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 TrackDay Coach. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 