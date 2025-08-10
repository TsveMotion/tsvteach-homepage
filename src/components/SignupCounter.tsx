'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SignupData {
  current: number;
  target: number;
  remaining: number;
  lastUpdated: string;
}

export default function SignupCounter() {
  const [signupData, setSignupData] = useState<SignupData>({
    current: 0,
    target: 50,
    remaining: 50,
    lastUpdated: new Date().toISOString()
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSignupData = async () => {
      try {
        const response = await fetch('/api/signup-count');
        const data = await response.json();
        setSignupData(data);
      } catch (error) {
        console.error('Failed to fetch signup data:', error);
        // Fallback data
        setSignupData({
          current: 47,
          target: 50,
          remaining: 3,
          lastUpdated: new Date().toISOString()
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSignupData();
    
    // Refresh data every 5 minutes
    const interval = setInterval(fetchSignupData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const percentage = (signupData.current / signupData.target) * 100;
  
  // Generate consistent data points for a simple graph (no random for SSR compatibility)
  const generateGraphData = () => {
    const points = [];
    const current = signupData.current;
    const steps = 10;
    
    for (let i = 0; i < steps; i++) {
      // Use deterministic values based on current count to avoid SSR hydration mismatch
      const baseValue = current - (steps - i - 1) * 2;
      const variation = Math.sin(i * 0.5) * 3; // Deterministic variation
      const value = Math.max(0, baseValue + variation);
      points.push({
        x: (i / (steps - 1)) * 100,
        y: 100 - (value / signupData.target) * 100
      });
    }
    return points;
  };
  
  const graphPoints = generateGraphData();

  if (loading) {
    return (
      <div className="w-full max-w-md mx-auto bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded mb-4"></div>
          <div className="h-8 bg-gray-200 rounded mb-2"></div>
          <div className="h-3 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm">
      {/* Compact Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
        <div className="flex items-center space-x-2">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-3 py-1 rounded-full text-xs font-medium">
            <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2 animate-pulse"></span>
            🚀 Launch Progress
          </div>
        </div>
        <div className="text-xs text-gray-500 sm:text-right">
          Launching at {signupData.target.toLocaleString()} signups
        </div>
      </div>
      
      {/* Horizontal Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
        {/* Numbers Display - More Compact */}
        <div className="lg:col-span-1">
          <div className="text-center lg:text-left">
            <div className="flex items-baseline justify-center lg:justify-start space-x-2">
              <span className="text-3xl md:text-4xl font-bold text-cyan-600">
                {signupData.current.toLocaleString()}
              </span>
              <span className="text-lg text-gray-400 font-medium">
                / {signupData.target.toLocaleString()}
              </span>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Beta Users • {percentage.toFixed(1)}% complete
            </div>
          </div>
        </div>
        
        {/* Progress Bar - Horizontal Focus */}
        <div className="lg:col-span-2 space-y-3">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <motion.div
              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full relative overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </motion.div>
          </div>
          
          <div className="flex justify-between items-center text-xs text-gray-600">
            <span>{signupData.remaining.toLocaleString()} more to launch!</span>
            <div className="flex items-center space-x-2">
              <svg width="40" height="20" viewBox="0 0 40 20" className="opacity-60">
                <defs>
                  <linearGradient id="miniGraphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#06b6d4', stopOpacity: 0.4}} />
                    <stop offset="100%" style={{stopColor: '#06b6d4', stopOpacity: 0.1}} />
                  </linearGradient>
                </defs>
                <path
                  d={`M 0 ${20 - (signupData.current * 0.8 / signupData.target * 20)} Q 10 ${20 - (signupData.current * 0.9 / signupData.target * 20)} 20 ${20 - (signupData.current * 0.95 / signupData.target * 20)} T 40 ${20 - (signupData.current / signupData.target * 20)}`}
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-cyan-600 font-medium">📈</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
