'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';

export default function TestAuth() {
  const { user, signIn, signUp, signOut } = useAuth();
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password123');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSignIn = async () => {
    setLoading(true);
    setMessage('');
    const { error } = await signIn(email, password);
    if (error) {
      setMessage(`Sign in error: ${error.message}`);
    } else {
      setMessage('Sign in successful!');
    }
    setLoading(false);
  };

  const handleSignUp = async () => {
    setLoading(true);
    setMessage('');
    const { error } = await signUp(email, password);
    if (error) {
      setMessage(`Sign up error: ${error.message}`);
    } else {
      setMessage('Sign up successful! Check your email for confirmation.');
    }
    setLoading(false);
  };

  const handleSignOut = async () => {
    setLoading(true);
    setMessage('');
    await signOut();
    setMessage('Sign out successful!');
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link href="/" className="logo">TrackDay Coach</Link>
            <nav className="nav">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/dashboard" className="nav-link">Dashboard</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="mb-4">Authentication Test</h1>
            <p className="text-lg">
              Test the authentication system with pre-filled credentials.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="card">
              <h2 className="card-title mb-6">Test Credentials</h2>
              
              <div className="space-y-4 mb-8">
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                    placeholder="test@example.com"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input"
                    placeholder="password123"
                  />
                </div>
              </div>

              {message && (
                <div className={`alert ${
                  message.includes('error') ? 'alert-error' : 'alert-success'
                }`}>
                  {message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <button
                  onClick={handleSignIn}
                  disabled={loading}
                  className="btn btn-primary"
                >
                  {loading ? 'Signing in...' : 'Sign in'}
                </button>
                
                <button
                  onClick={handleSignUp}
                  disabled={loading}
                  className="btn btn-secondary"
                >
                  {loading ? 'Signing up...' : 'Sign up'}
                </button>
                
                <button
                  onClick={handleSignOut}
                  disabled={loading || !user}
                  className="btn btn-outline"
                >
                  {loading ? 'Signing out...' : 'Sign out'}
                </button>
              </div>

              {/* Current User Status */}
              <div className="card">
                <h3 className="card-title mb-4">Current Status</h3>
                
                {user ? (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Status:</span>
                      <span className="text-green-600 font-semibold">Authenticated</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-mono text-gray-900">{user.email}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">User ID:</span>
                      <span className="font-mono text-sm text-gray-900">{user.id}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Created:</span>
                      <span className="font-mono text-sm text-gray-900">
                        {new Date(user.created_at).toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Last Sign In:</span>
                      <span className="font-mono text-sm text-gray-900">
                        {user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString() : 'Never'}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-4">🔒</div>
                    <p className="font-semibold text-gray-900">
                      Not authenticated
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      Sign in or sign up to see your user information
                    </p>
                  </div>
                )}
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