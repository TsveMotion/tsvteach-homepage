'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

// Optimized particle component
const Particle = ({ delay = 0 }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-[#00f400] rounded-full opacity-40"
      initial={{ 
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
        y: 100
      }}
      animate={{
        y: -50,
        opacity: [0.4, 0.8, 0]
      }}
      transition={{
        duration: 3,
        delay: delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

// Floating text animation component
interface FloatingTextProps {
  children: React.ReactNode;
  delay?: number;
}

const FloatingText = ({ children, delay = 0 }: FloatingTextProps) => {
  return (
    <motion.span
      className="inline-block"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
    >
      {children}
    </motion.span>
  );
};

export default function HeroSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Optimized particle system */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Particle key={i} delay={i * 0.3} />
        ))}
      </div>

      {/* Simplified background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#00f400] opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#00f400] opacity-5"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block text-[#00f400] font-extrabold">TsvTeach</span>{' '}
          <span className="inline-block">-</span>{' '}
          <span className="inline-block">Smarter</span>{' '}
          <span className="inline-block text-[#00f400]">Studying</span>{' '}
          <span className="inline-block">Starts</span>{' '}
          <span className="inline-block text-[#00f400]">Here</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <strong>TsvTeach</strong> is the leading AI-powered learning platform that helps UK students ace{' '}
          <motion.span 
            className="font-semibold text-[#00f400]"
            whileHover={{ scale: 1.1, color: "#00e600" }}
            transition={{ duration: 0.2 }}
          >
            GCSEs
          </motion.span> and{' '}
          <motion.span 
            className="font-semibold text-[#00f400]"
            whileHover={{ scale: 1.1, color: "#00e600" }}
            transition={{ duration: 0.2 }}
          >
            A-levels
          </motion.span>.
        </motion.p>

        <motion.div
          className="max-w-md sm:max-w-lg mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg bg-white text-gray-900 placeholder-gray-500 border-2 border-gray-300 rounded-full focus:border-[#00f400] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#00f400]/20 shadow-sm"
                  whileFocus={{ scale: 1.02 }}
                  style={{ color: '#111827', fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '500' }}
                  required
                />
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#00f400] text-black font-bold text-base sm:text-lg rounded-full hover:bg-[#00e600] transition-all duration-300 disabled:opacity-50 whitespace-nowrap relative overflow-hidden group shadow-lg min-h-[56px] sm:min-h-[60px] flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0, 244, 0, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{ color: '#000000', fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '700', lineHeight: '1.2' }}
                >
                  <motion.span
                    className="relative z-10 text-black font-bold flex items-center justify-center"
                    animate={isLoading ? {
                      opacity: [1, 0.5, 1]
                    } : {}}
                    transition={{
                      duration: 1,
                      repeat: isLoading ? Infinity : 0
                    }}
                    style={{ color: '#000000', fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '700', textShadow: 'none' }}
                  >
                    {isLoading ? 'Getting Access...' : 'Get Early Access 🚀'}
                  </motion.span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </motion.button>
              </div>
            </form>
          ) : (
            <motion.div
              className="bg-gradient-to-r from-[#00f400] to-[#00e600] text-black px-8 py-6 rounded-2xl relative overflow-hidden"
              initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                type: "spring",
                stiffness: 200
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />
              <div className="relative z-10">
                <motion.h3 
                  className="text-2xl font-bold mb-2 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Thanks for signing up! 
                  <motion.span 
                    className="ml-2"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                  >
                    🎉
                  </motion.span>
                </motion.h3>
                <p className="text-lg">We'll notify you when TsvTeach.com launches!</p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Simplified floating study icons */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 text-4xl"
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            📚
          </motion.div>
          <motion.div
            className="absolute top-32 right-16 text-3xl"
            animate={{
              y: [0, -8, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            🎯
          </motion.div>
          <motion.div
            className="absolute bottom-40 left-20 text-3xl"
            animate={{
              y: [0, -6, 0]
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            🧠
          </motion.div>
          <motion.div
            className="absolute bottom-32 right-12 text-4xl"
            animate={{
              y: [0, -12, 0]
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2
            }}
          >
            ⚡
          </motion.div>
        </div>

        {/* Success confetti effect */}
        {isSubmitted && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-[#00f400] rounded-full"
                initial={{
                  x: "50%",
                  y: "50%",
                  scale: 0
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: [0, 1, 0],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
