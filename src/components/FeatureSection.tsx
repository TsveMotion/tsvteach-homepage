'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Simple optimized feature card
interface SimpleFeatureCardProps {
  feature: {
    icon: string;
    title: string;
    description: string;
  };
  index: number;
  isInView: boolean;
}

const SimpleFeatureCard = ({ feature, index, isInView }: SimpleFeatureCardProps) => {
  return (
    <motion.div
      className="bg-black rounded-2xl p-6 text-center relative overflow-hidden group hover:scale-105 transition-transform duration-200"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1, 
        ease: "easeOut" 
      }}
    >
      {/* Hover effect background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      
      <div className="relative z-10">
        <motion.div
          className="text-6xl mb-4"
          animate={{
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {feature.icon}
        </motion.div>
        
        <div className="flex items-center justify-center mb-3">
          <span className="text-[#00f400] mr-2 text-xl">✅</span>
          <h3 className="text-xl font-bold text-white">
            {feature.title}
          </h3>
        </div>
        
        <p className="text-gray-300 leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-[#00f400] opacity-10 rounded-bl-full" />
    </motion.div>
  );
};

export default function FeatureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [backgroundElements, setBackgroundElements] = useState<Array<{x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBackgroundElements(
        [...Array(15)].map((_, i) => ({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          delay: i * 0.3
        }))
      );
    }
  }, []);

  const features = [
    {
      icon: "🎯",
      title: "Smart Topic Suggestions",
      description: "AI analyzes your weaknesses and suggests the perfect topics to study next for maximum impact."
    },
    {
      icon: "⚡",
      title: "Instant Feedback on Answers",
      description: "Get immediate, detailed feedback on your answers with explanations to help you understand mistakes."
    },
    {
      icon: "📈",
      title: "Personalized Revision Plans",
      description: "Custom study schedules tailored to your exam dates, learning pace, and subject priorities."
    },
    {
      icon: "🎮",
      title: "Memory Quiz Games",
      description: "Engaging, gamified quizzes that make memorizing facts and formulas fun and effective."
    }
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#00f400] via-[#00e600] to-[#00f400] relative overflow-hidden">
      {/* Spectacular background effects */}
      <div className="absolute inset-0">
        {/* Animated geometric shapes */}
        {backgroundElements.map((element, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-black opacity-20 rounded-full"
            initial={{
              x: element.x,
              y: element.y,
              scale: 0
            }}
            animate={{
              y: [element.y, element.y - 100, element.y],
              scale: [0, 1, 0],
              opacity: [0, 0.4, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Large rotating background elements */}
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 bg-black opacity-5 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 360],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-black opacity-5 rounded-full"
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 0],
            x: [0, -40, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-20 h-20 bg-black opacity-3 rounded-full"
          animate={{
            scale: [1, 2, 1],
            rotate: [0, -360],
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Floating success indicators */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            {['🎯', '⚡', '🧠', '🚀', '💯', '🔥'][i]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black text-center mb-20"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
          transition={{ duration: 1.2, ease: "easeOut", type: "spring", stiffness: 100 }}
        >
          Why Students{' '}
          <motion.span 
            className="underline decoration-black decoration-8 inline-block"
            animate={{
              textShadow: isInView ? [
                "0 0 0px #000000",
                "0 0 10px #000000",
                "0 0 0px #000000"
              ] : "0 0 0px #000000"
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            Love
          </motion.span>{' '}
          TsvTeach
        </motion.h2>

        {/* Optimized feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <SimpleFeatureCard
              key={index}
              feature={feature}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Spectacular testimonial section */}
        <motion.div
          className="text-center relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
        >
          {/* Glowing background */}
          <motion.div
            className="absolute inset-0 bg-black rounded-3xl opacity-90"
            animate={{
              boxShadow: [
                "0 0 0px rgba(0, 0, 0, 0.5)",
                "0 0 30px rgba(0, 0, 0, 0.8)",
                "0 0 0px rgba(0, 0, 0, 0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          <div className="relative z-10 bg-gradient-to-br from-black to-gray-900 rounded-3xl p-10 max-w-3xl mx-auto border-2 border-[#00f400] border-opacity-30">
            {/* Floating stars animation */}
            <div className="flex justify-center mb-6">
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-3xl"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={isInView ? { 
                      opacity: 1, 
                      scale: 1, 
                      rotate: 0
                    } : { 
                      opacity: 0, 
                      scale: 0, 
                      rotate: -180 
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.4 + (i * 0.1), 
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{
                      scale: 1.3,
                      rotate: 360,
                      textShadow: "0 0 10px #FFD700"
                    }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>
            </div>
            
            <motion.blockquote 
              className="text-white text-xl sm:text-2xl italic mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              &quot;I went from a C to an A* in Maths using TsvTeach! The AI knew exactly what I needed to work on. It&apos;s like having a personal tutor who never gets tired.&quot;
            </motion.blockquote>
            
            <motion.div
              className="flex items-center justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 2.0 }}
            >
              <motion.div
                className="w-12 h-12 bg-[#00f400] rounded-full flex items-center justify-center text-black font-bold text-xl"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(0, 244, 0, 0.4)",
                    "0 0 20px rgba(0, 244, 0, 0.6)",
                    "0 0 0px rgba(0, 244, 0, 0.4)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                S
              </motion.div>
              <div className="text-left">
                <p className="text-[#00f400] font-bold text-lg">
                  Sarah M.
                </p>
                <p className="text-gray-400 text-sm">
                  A-Level Student, London
                </p>
              </div>
            </motion.div>

            {/* Success metrics */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-gray-700"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              {[
                { label: "Grade Improvement", value: "C → A*" },
                { label: "Study Time Saved", value: "60%" },
                { label: "Confidence Boost", value: "10x" }
              ].map((metric, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="text-2xl font-bold text-[#00f400] mb-1"
                    animate={{
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-gray-400 text-sm">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Floating achievement badges */}
          <div className="absolute inset-0 pointer-events-none">
            {['🏆', '🎓', '📈'].map((emoji, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl"
                style={{
                  top: `${20 + i * 20}%`,
                  left: i === 1 ? '50%' : i === 0 ? '10%' : '90%',
                  transform: 'translateX(-50%)'
                }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.7
                }}
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
