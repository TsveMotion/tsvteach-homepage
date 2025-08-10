'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface Subscriber {
  _id: string;
  email: string;
  subscribedAt: string;
  source: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });
      
      if (response.ok) {
        setIsAuthenticated(true);
        fetchSubscribers();
        setError('');
      } else {
        setError('Invalid password');
      }
    } catch {
      setError('Authentication error');
    } finally {
      setLoading(false);
    }
  };

  const fetchSubscribers = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/subscribers');
      if (response.ok) {
        const data = await response.json();
        setSubscribers(data.subscribers);
      } else {
        setError('Failed to fetch subscribers');
      }
    } catch {
      setError('Error fetching subscribers');
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const csvContent = [
      ['Email', 'Subscribed At', 'Source'],
      ...subscribers.map(sub => [
        sub.email,
        new Date(sub.subscribedAt).toLocaleString(),
        sub.source
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tsvteach-subscribers-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <motion.div
          className="bg-white border border-gray-200 shadow-lg p-8 rounded-2xl max-w-md w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              TsvTeach Admin
            </h1>
            <p className="text-gray-600 text-sm">
              Access your admin dashboard
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-100 transition-all"
                required
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image 
              src="/LongLogo.png" 
              alt="TsvTeach Logo" 
              width={180}
              height={24}
              className="h-8 w-auto" 
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-black transition-colors">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-black transition-colors">About</Link>
            <Link href="/gcse" className="text-gray-600 hover:text-black transition-colors">GCSE</Link>
            <Link href="/a-levels" className="text-gray-600 hover:text-black transition-colors">A-Levels</Link>
            <Link href="/blog" className="text-gray-600 hover:text-black transition-colors">Blog</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="hidden md:block text-sm text-gray-600">Welcome, Admin</span>
            <button
              onClick={() => {
                setIsAuthenticated(false);
                setPassword('');
              }}
              className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
            >
              Sign Out
            </button>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-6">
        <motion.div
          className="bg-white rounded-xl border border-gray-200 shadow-sm p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Subscriber Overview
              </h2>
              <p className="text-gray-600">
                Manage and export your subscriber list
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-0">
              <button
                onClick={fetchSubscribers}
                disabled={loading}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 font-medium"
              >
                {loading ? 'Refreshing...' : '↻ Refresh Data'}
              </button>
              <button
                onClick={exportToCSV}
                disabled={subscribers.length === 0}
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 font-medium"
              >
                ↓ Export CSV
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-red-500">⚠</span>
                <span>{error}</span>
              </div>
            </div>
          )}

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <span className="text-2xl font-bold text-gray-900">
                    {subscribers.length}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Total Subscribers
                  </h3>
                  <p className="text-sm text-gray-600">
                    {subscribers.length > 0 ? 
                      `Last signup: ${new Date(subscribers[0]?.subscribedAt || '').toLocaleDateString()}` : 
                      'No subscribers yet'
                    }
                  </p>
                </div>
              </div>
            </div>

            {subscribers.length === 0 ? (
              <div className="bg-white rounded-lg p-8 text-center border border-gray-200">
                <div className="text-gray-400 text-6xl mb-4">📭</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No subscribers yet
                </h3>
                <p className="text-gray-600">
                  Refresh to check for new signups or wait for users to join your waitlist!
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left text-gray-700 font-semibold py-4 px-6 text-sm uppercase tracking-wider">Email</th>
                        <th className="text-left text-gray-700 font-semibold py-4 px-6 text-sm uppercase tracking-wider">Subscribed At</th>
                        <th className="text-left text-gray-700 font-semibold py-4 px-6 text-sm uppercase tracking-wider">Source</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {subscribers.map((subscriber, index) => (
                        <motion.tr
                          key={subscriber._id}
                          className="hover:bg-gray-50 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <td className="text-gray-900 py-4 px-6 font-medium">{subscriber.email}</td>
                          <td className="text-gray-600 py-4 px-6">
                            {new Date(subscriber.subscribedAt).toLocaleString()}
                          </td>
                          <td className="text-gray-600 py-4 px-6">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">
                              {subscriber.source.replace('_', ' ')}
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
