'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FinalEmailCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
          source: 'final_cta'
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Main CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Learn smarter, faster, easier.
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Upload your content, and start your learning journey
            </p>

            {!isSubmitted ? (
              <motion.form 
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 w-full sm:w-auto px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none text-black"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 whitespace-nowrap"
                >
                  {isLoading ? 'Getting Access...' : 'Get Started'}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-md mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-center space-x-2 text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold">Welcome to TsvTeach!</span>
                </div>
                <p className="text-green-600 mt-2 text-sm">
                  Check your email for next steps to start improving your grades with AI.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Simple Validation Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-6">
            <Image 
              src="/LongLogo.png" 
              alt="TsvTeach Logo" 
              width={180}
              height={24}
              className="h-8 w-auto" 
            />
          </div>
          
          {/* Validation Message */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              🚀 Idea Validation Phase
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              We're validating our AI learning platform idea!
            </h3>
            <p className="text-gray-700 text-sm">
              Help us build the perfect study tool for UK students. Join our beta waitlist and be part of shaping the future of AI-powered education.
            </p>
          </div>
          
          {/* Only working links */}
          <div className="flex justify-center space-x-6 mb-6 text-sm">
            <a href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
              📚 Blog
            </a>
            <a href="/admin" className="text-gray-600 hover:text-gray-900 transition-colors">
              🔐 Admin
            </a>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-500 text-sm">
              © 2025 TsvTeach - Validating ideas, building the future of education ✨
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
