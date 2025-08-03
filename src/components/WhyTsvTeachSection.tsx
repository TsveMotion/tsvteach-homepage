'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Interactive card component with morphing effects
interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  isOld?: boolean;
}

const InteractiveCard = ({ children, className = '', delay = 0, isOld = false }: InteractiveCardProps) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, x: isOld ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: delay, 
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: isOld ? 
          "0 10px 20px rgba(239, 68, 68, 0.2)" : 
          "0 10px 20px rgba(0, 244, 0, 0.2)"
      }}
    >
      {children}
    </motion.div>
  );
};

export default function WhyTsvTeachSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showTransformation, setShowTransformation] = useState(false);
  
  useEffect(() => {
    if (isInView) {
      setTimeout(() => setShowTransformation(true), 2000);
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-2 h-2 bg-[#00f400] rounded-full opacity-20"
          animate={{
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-2 h-2 bg-[#00f400] rounded-full opacity-20"
          animate={{
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
          transition={{ duration: 1, ease: "easeOut", type: "spring", stiffness: 100 }}
        >
          Why <motion.span 
            className="text-[#00f400] inline-block"
            animate={{
              textShadow: isInView ? [
                "0 0 0px #00f400",
                "0 0 20px #00f400",
                "0 0 0px #00f400"
              ] : "0 0 0px #00f400"
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            TsvTeach
          </motion.span>?
        </motion.h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Old way */}
          <div className="mb-16">
            <InteractiveCard
              className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 mb-8 relative"
              delay={0.4}
              isOld={true}
            >
              <motion.div 
                className="absolute top-4 right-4"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  OLD WAY ❌
                </span>
              </motion.div>
              
              <motion.h3 
                className="text-3xl font-bold text-gray-800 mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Traditional Studying
              </motion.h3>
              
              <div className="text-left space-y-4">
                {[
                  "One-size-fits-all textbooks",
                  "No personalized feedback", 
                  "Boring, repetitive practice",
                  "Slow progress tracking"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center text-gray-700 text-lg"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                  >
                    <motion.span 
                      className="text-red-500 mr-4 text-xl"
                      animate={{ rotate: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      ❌
                    </motion.span>
                    {item}
                  </motion.div>
                ))}
              </div>
            </InteractiveCard>

            {/* Spectacular transformation arrow */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0, rotate: 180 }}
              animate={isInView ? { 
                opacity: 1, 
                scale: showTransformation ? 1.2 : 1, 
                rotate: 0 
              } : { opacity: 0, scale: 0, rotate: 180 }}
              transition={{ duration: 1, delay: 1.6, type: "spring", stiffness: 200 }}
            >
              <motion.div 
                className="bg-gradient-to-r from-[#00f400] to-[#00e600] rounded-full p-6 relative"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(0, 244, 0, 0.4)",
                    "0 0 30px rgba(0, 244, 0, 0.6)",
                    "0 0 0px rgba(0, 244, 0, 0.4)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.svg 
                  className="w-10 h-10 text-black" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
                
                {/* Magical sparkles around the arrow */}
                {showTransformation && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                          top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 30}px`,
                          left: `${20 + Math.cos(i * 60 * Math.PI / 180) * 30}px`
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            </motion.div>

            {/* New way */}
            <InteractiveCard
              className="bg-gradient-to-br from-[#00f400] to-[#00e600] rounded-3xl p-8 text-black relative"
              delay={0.8}
              isOld={false}
            >
              <motion.div 
                className="absolute top-4 right-4"
                initial={{ scale: 0, rotate: 180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <span className="bg-black text-[#00f400] px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  NEW WAY ✨
                </span>
              </motion.div>
              
              <motion.h3 
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                TsvTeach AI Learning
              </motion.h3>
              
              <div className="text-left space-y-4">
                {[
                  "AI-powered personalized learning paths",
                  "Instant feedback and corrections",
                  "Gamified, engaging practice sessions", 
                  "Real-time progress tracking"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center text-lg"
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.6, delay: 1.6 + (index * 0.1) }}
                  >
                    <motion.span 
                      className="text-black mr-4 text-xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                    >
                      ✅
                    </motion.span>
                    {item}
                  </motion.div>
                ))}
              </div>
              
              {/* Success particles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                {showTransformation && [...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-black rounded-full opacity-60"
                    initial={{
                      x: Math.random() * 300,
                      y: Math.random() * 200
                    }}
                    animate={{
                      y: [null, -20],
                      opacity: [0.6, 0, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </div>
            </InteractiveCard>
          </div>

          {/* Enhanced main message */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 2, ease: "easeOut" }}
          >
            <motion.p
              className="text-2xl sm:text-3xl text-gray-700 leading-relaxed max-w-4xl mx-auto relative z-10"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Traditional studying is outdated. TsvTeach personalizes your learning using AI to help you{' '}
              <motion.span 
                className="font-bold text-[#00f400] relative"
                whileHover={{ 
                  scale: 1.1,
                  textShadow: "0 0 10px #00f400"
                }}
                transition={{ duration: 0.2 }}
              >
                study faster
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-[#00f400]"
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: "100%" } : { width: "0%" }}
                  transition={{ duration: 0.8, delay: 2.5 }}
                />
              </motion.span> and{' '}
              <motion.span 
                className="font-bold text-[#00f400] relative"
                whileHover={{ 
                  scale: 1.1,
                  textShadow: "0 0 10px #00f400"
                }}
                transition={{ duration: 0.2 }}
              >
                score higher
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-[#00f400]"
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: "100%" } : { width: "0%" }}
                  transition={{ duration: 0.8, delay: 2.8 }}
                />
              </motion.span>.
            </motion.p>
            
            {/* Floating emphasis elements */}
            <motion.div
              className="absolute -top-4 -left-4 text-4xl"
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🎯
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -right-4 text-4xl"
              animate={{
                rotate: [0, -15, 15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              🚀
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced decorative elements */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <motion.div
            className="w-24 h-24 bg-gradient-to-r from-[#00f400] to-transparent opacity-20 rounded-full"
            animate={{
              scale: [1, 1.8, 1],
              x: [0, 30, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        <div className="absolute right-0 top-1/4">
          <motion.div
            className="w-20 h-20 bg-gradient-to-l from-[#00f400] to-transparent opacity-15 rounded-full"
            animate={{
              scale: [1.2, 1, 1.5, 1.2],
              x: [0, -25, 0],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>
      </div>
    </section>
  );
}
