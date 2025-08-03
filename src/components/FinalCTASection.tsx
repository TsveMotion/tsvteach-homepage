'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-1/4 w-2 h-2 bg-[#00f400] rounded-full"
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0
          }}
        />
        <motion.div
          className="absolute top-40 right-1/3 w-1 h-1 bg-[#00f400] rounded-full"
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-[#00f400] rounded-full"
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-1 h-1 bg-[#00f400] rounded-full"
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 2, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Ready to{' '}
          <span className="text-[#00f400] inline-block">
            <motion.span
              animate={{
                textShadow: [
                  "0 0 0px #00f400",
                  "0 0 10px #00f400",
                  "0 0 0px #00f400"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Ace
            </motion.span>
          </span>{' '}
          Your Exams?
        </motion.h2>

        <motion.p
          className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Join thousands of UK students who are already getting{' '}
          <span className="text-[#00f400] font-semibold">better grades</span> with AI-powered learning
        </motion.p>

        <motion.div
          className="max-w-lg mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email to get notified"
                  className="flex-1 px-6 py-4 text-lg bg-gray-800 border-2 border-gray-700 text-white rounded-full focus:border-[#00f400] focus:outline-none transition-colors placeholder-gray-400"
                  required
                />
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 bg-[#00f400] text-black font-bold text-lg rounded-full hover:bg-[#00e600] transition-all duration-300 disabled:opacity-50 whitespace-nowrap relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">
                    {isLoading ? 'Securing Spot...' : 'Get Early Access 🚀'}
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </motion.button>
              </div>
            </form>
          ) : (
            <motion.div
              className="bg-gradient-to-r from-[#00f400] to-[#00e600] text-black px-8 py-6 rounded-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="flex items-center justify-center mb-2">
                <span className="text-3xl mr-2">🎉</span>
                <h3 className="text-2xl font-bold">You&apos;re In!</h3>
              </div>
              <p className="text-lg">We&apos;ll email you the moment TsvTeach.com launches!</p>
            </motion.div>
          )}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 text-gray-400"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center">
            <span className="text-[#00f400] mr-2">🔒</span>
            <span className="text-sm">Your email is safe with us</span>
          </div>
          <div className="flex items-center">
            <span className="text-[#00f400] mr-2">📱</span>
            <span className="text-sm">Mobile & desktop ready</span>
          </div>
          <div className="flex items-center">
            <span className="text-[#00f400] mr-2">🇬🇧</span>
            <span className="text-sm">Made for UK students</span>
          </div>
        </motion.div>

        {/* Final motivational message */}
        <motion.div
          className="mt-16 p-6 bg-gray-800 border border-gray-700 rounded-2xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            <span className="text-[#00f400] font-semibold">&quot;The best time to plant a tree was 20 years ago. The second best time is now.&quot;</span>
            <br />
            <span className="text-sm mt-2 block">Don&apos;t wait until exam stress kicks in. Start smarter studying today.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
