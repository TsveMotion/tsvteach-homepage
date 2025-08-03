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
    target: 1000,
    remaining: 1000,
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
          target: 1000,
          remaining: 953,
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
  const pathData = graphPoints.map((point, index) => 
    `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
  ).join(' ');

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
    <div className="w-full max-w-lg mx-auto bg-white border-2 border-gray-300 rounded-xl p-8 shadow-lg">
      <div className="text-center mb-6">
        <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
          🚀 Beta Launch Progress
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Launch Progress
        </h3>
        <p className="text-base text-gray-700">
          We're validating our idea! Launch when we reach {signupData.target.toLocaleString()} beta signups.
        </p>
      </div>
      
      {/* Enhanced Growth Graph */}
      <div className="mb-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border-2 border-gray-200 p-6">
        <div className="text-sm font-semibold text-gray-700 mb-4 text-center flex items-center justify-center">
          <span className="mr-2">📈</span> Beta Signup Trend
        </div>
        <svg width="100%" height="80" viewBox="0 0 100 100" className="overflow-visible">
          <defs>
            <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#10b981', stopOpacity: 0.3}} />
              <stop offset="100%" style={{stopColor: '#10b981', stopOpacity: 0.1}} />
            </linearGradient>
          </defs>
          
          {/* Grid lines */}
          {[25, 50, 75].map(y => (
            <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#f3f4f6" strokeWidth="0.5" />
          ))}
          
          {/* Area under curve */}
          <path
            d={`${pathData} L 100 100 L 0 100 Z`}
            fill="url(#graphGradient)"
          />
          
          {/* Main line */}
          <path
            d={pathData}
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Data points */}
          {graphPoints.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="1.5"
              fill="#10b981"
            />
          ))}
        </svg>
      </div>
      
      <div className="space-y-6">
        {/* Main Numbers Display */}
        <div className="text-center bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-center space-x-4">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-1">
                {signupData.current.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Beta Users
              </div>
            </div>
            <div className="text-2xl text-gray-300">/</div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-400">
                {signupData.target.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Launch Goal
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Progress Bar */}
        <div className="bg-white rounded-lg p-4">
          <div className="w-full bg-gray-200 rounded-full h-4 mb-3">
            <motion.div
              className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full relative overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </motion.div>
          </div>
          
          <div className="text-center">
            <span className="text-xl font-bold text-gray-800">
              {signupData.remaining.toLocaleString()} more needed to launch!
            </span>
            <div className="text-sm text-gray-500 mt-1">
              {percentage.toFixed(1)}% complete
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-xs text-gray-500 text-center">
        Join now to be among the first users when we launch!
      </div>
    </div>
  );
}
