'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SignupCounter from './SignupCounter';

export default function NewHeroSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'hero_section'
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setShowCelebration(true);
        setEmail('');
        
        // Hide celebration after 3 seconds
        setTimeout(() => {
          setShowCelebration(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-white min-h-screen relative overflow-hidden">
      {/* Celebration Confetti */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: -10,
                rotate: 0,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{
                y: window.innerHeight + 10,
                rotate: 360,
                x: Math.random() * window.innerWidth
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      )}
      {/* Simplified Navigation Header */}
      <nav className="flex items-center justify-between px-4 md:px-6 py-4 bg-white border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <span className="text-gray-900 font-semibold text-xl">TsvTeach</span>
        </div>
        
        <button 
          onClick={() => document.getElementById('email-input')?.focus()}
          className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm md:text-base"
        >
          Join Waitlist
        </button>
      </nav>

      {/* Main Hero Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-16 text-center">
        {/* Validation badge */}
        <div className="inline-flex items-center bg-blue-50 text-blue-600 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-6 md:mb-8">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
          Help us validate our idea!
        </div>

        {/* Main Headline */}
        <motion.h1 
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          AI Tutor for UK Students
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Turn study materials into interactive learning experiences
        </motion.p>

        {/* Signup Counter */}
        <motion.div
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SignupCounter />
        </motion.div>

        {/* Email Signup Form */}
        {!isSubmitted ? (
          <motion.form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 max-w-md mx-auto mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <input
              id="email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 w-full sm:w-auto px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none text-black bg-white"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 font-medium"
            >
              {isLoading ? 'Joining...' : 'Join Waitlist'}
            </button>
          </motion.form>
        ) : (
          <motion.div 
            className="bg-green-50 border border-green-200 rounded-lg p-4 md:p-6 max-w-md mx-auto mb-8 md:mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold text-sm md:text-base">You're on the waitlist!</span>
            </div>
            <p className="text-green-600 mt-2 text-xs md:text-sm text-center">
              We'll notify you when we launch. Thank you for helping us validate our idea!
            </p>
          </motion.div>
        )}

        {/* Social Proof */}
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
            <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
            <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white"></div>
          </div>
          <span>Loved by 1,000,000+ learners</span>
        </div>

        {/* Hero Visual Preview */}
        <motion.div 
          className="mt-16 bg-white border-2 border-gray-200 rounded-2xl p-8 mx-auto max-w-4xl shadow-sm relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Demo Label */}
          <div className="absolute -top-3 left-6 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            DEMO
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <div className="text-gray-600 text-sm mb-2">What do you want to learn today?</div>
            <div className="bg-white border border-gray-200 rounded p-3 text-gray-700">
              Upload PDF, paste YouTube video, or record a lecture
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="text-green-600 text-sm font-semibold mb-2">📝 My spaces</div>
              <div className="space-y-2">
                <div className="text-gray-700 text-sm">📚 Introduction to Biology</div>
                <div className="text-gray-700 text-sm">🧪 GCSE Chemistry</div>
                <div className="text-gray-700 text-sm">📊 A-Level Mathematics</div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="text-blue-600 text-sm font-semibold mb-2">💬 Chat with AI</div>
              <div className="text-gray-700 text-sm">
                Ask questions about your study materials and get instant, personalized explanations.
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="text-purple-600 text-sm font-semibold mb-2">🎯 Practice Tests</div>
              <div className="text-gray-700 text-sm">
                Generate custom quizzes and practice problems tailored to your learning needs.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
