'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password protection - in production, use proper authentication
    if (password === 'tsvteach2024') {
      setIsAuthenticated(true);
      fetchSubscribers();
    } else {
      setError('Invalid password');
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
    } catch (error) {
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
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-4">
        <motion.div
          className="bg-gray-800 p-8 rounded-2xl max-w-md w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-white mb-6 text-center">
            TsvTeach Admin
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:border-[#00f400] focus:outline-none"
                required
              />
            </div>
            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}
            <button
              type="submit"
              className="w-full py-3 bg-[#00f400] text-black font-bold rounded-lg hover:bg-[#00e600] transition-colors"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-gray-800 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-4 sm:mb-0">
              TsvTeach Subscribers
            </h1>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={fetchSubscribers}
                disabled={loading}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {loading ? 'Refreshing...' : 'Refresh'}
              </button>
              <button
                onClick={exportToCSV}
                disabled={subscribers.length === 0}
                className="px-6 py-3 bg-[#00f400] text-black font-bold rounded-lg hover:bg-[#00e600] transition-colors disabled:opacity-50"
              >
                Export CSV
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-900 border border-red-600 text-red-200 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}

          <div className="bg-gray-700 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">
                Total Subscribers: {subscribers.length}
              </h2>
            </div>

            {subscribers.length === 0 ? (
              <p className="text-gray-400 text-center py-8">
                No subscribers yet. Refresh to check for new signups!
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-gray-300 font-semibold py-3 px-2">Email</th>
                      <th className="text-gray-300 font-semibold py-3 px-2">Subscribed At</th>
                      <th className="text-gray-300 font-semibold py-3 px-2">Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.map((subscriber, index) => (
                      <motion.tr
                        key={subscriber._id}
                        className="border-b border-gray-600 hover:bg-gray-600 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <td className="text-white py-3 px-2">{subscriber.email}</td>
                        <td className="text-gray-300 py-3 px-2">
                          {new Date(subscriber.subscribedAt).toLocaleString()}
                        </td>
                        <td className="text-gray-300 py-3 px-2 capitalize">
                          {subscriber.source}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsAuthenticated(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Logout
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
