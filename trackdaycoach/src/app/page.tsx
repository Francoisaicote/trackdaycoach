'use client';

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">TrackDay Coach</div>
            <nav className="nav">
              {user ? (
                <>
                  <Link href="/dashboard" className="nav-link">Dashboard</Link>
                  <Link href="/test-auth" className="nav-link">Test Auth</Link>
                </>
              ) : (
                <>
                  <Link href="/auth/signin" className="nav-link">Sign In</Link>
                  <Link href="/auth/signup" className="btn btn-primary">Get Started</Link>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="mb-4">
              Professional Track Day Coaching
            </h1>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Connect with experienced instructors to improve your track performance and safety. 
              Get personalized coaching from certified professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup" className="btn btn-primary">
                Start Learning
              </Link>
              <Link href="/auth/signin" className="btn btn-secondary">
                Sign In
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="card text-center">
              <div className="text-4xl mb-4">👨‍🏫</div>
              <h3 className="card-title">Expert Instructors</h3>
              <p>Learn from certified professionals with years of track experience and proven teaching methods.</p>
            </div>

            <div className="card text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="card-title">Performance Tracking</h3>
              <p>Monitor your progress with detailed analytics, lap times, and personalized feedback.</p>
            </div>

            <div className="card text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="card-title">Community</h3>
              <p>Join a community of passionate drivers and instructors to share knowledge and experiences.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="card text-center">
            <h2 className="mb-4">Ready to improve your track performance?</h2>
            <p className="mb-6">
              Join thousands of drivers who have improved their skills with professional coaching.
            </p>
            <Link href="/auth/signup" className="btn btn-primary">
              Get Started Today
            </Link>
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
