'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BlogPost {
  title: string;
  description: string;
  slug: string;
  category: string;
  readTime: string;
  color: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "GCSE Grade Boundaries 2025: Grade 9 Strategy",
    description: "Complete guide to achieving Grade 9 in your GCSEs with AI-powered study techniques and proven strategies.",
    slug: "gcse-grade-boundaries-2025-grade-9-strategy",
    category: "GCSE Strategy",
    readTime: "5 min read",
    color: "bg-gradient-to-br from-blue-100 to-blue-200"
  },
  {
    title: "Oxford Medicine Requirements 2025: Complete Guide",
    description: "Everything you need to know about getting into Oxford Medicine, including UCAT scores, interview tips, and more.",
    slug: "oxford-medicine-requirements-2025-complete-guide",
    category: "University Applications",
    readTime: "8 min read",
    color: "bg-gradient-to-br from-purple-100 to-purple-200"
  },
  {
    title: "Best A-Level Subjects for Medicine: AI Guide",
    description: "Discover the optimal A-Level subject combinations for medicine applications with personalized AI recommendations.",
    slug: "best-a-level-subjects-medicine-ai-guide",
    category: "A-Level Guidance",
    readTime: "6 min read",
    color: "bg-gradient-to-br from-green-100 to-green-200"
  },
  {
    title: "A-Level Maths AI Tutor: Complete Guide",
    description: "Master A-Level Mathematics with AI-powered learning techniques, problem-solving strategies, and exam preparation.",
    slug: "a-level-maths-ai-tutor-guide",
    category: "A-Level Subjects",
    readTime: "7 min read",
    color: "bg-gradient-to-br from-orange-100 to-orange-200"
  },
  {
    title: "GCSE Science Revision: AI-Powered Methods",
    description: "Revolutionary AI techniques to master GCSE Science subjects efficiently and achieve top grades.",
    slug: "gcse-science-revision-ai-powered",
    category: "GCSE Subjects",
    readTime: "5 min read",
    color: "bg-gradient-to-br from-teal-100 to-teal-200"
  },
  {
    title: "Imperial College Medicine 2025: Application Guide",
    description: "Complete application guide for Imperial College Medicine including requirements, interviews, and success tips.",
    slug: "imperial-college-medicine-2025-application-guide",
    category: "University Applications",
    readTime: "9 min read",
    color: "bg-gradient-to-br from-pink-100 to-pink-200"
  }
];

export default function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const postsPerPage = 3;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentPosts = () => {
    const start = currentIndex * postsPerPage;
    return blogPosts.slice(start, start + postsPerPage);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn from our blog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover study strategies, university guidance, and exam preparation tips from our expert content.
          </p>
        </div>

        {/* Blog Cards Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {getCurrentPosts().map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${post.color} rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer group`}
                  onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                >
                  <div className="mb-4">
                    <span className="inline-block bg-white/70 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="float-right text-sm text-gray-600">
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 text-sm font-medium">
                    Read article
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          {totalPages > 1 && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                aria-label="Previous blog posts"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border-2 border-gray-300 rounded-full p-4 shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] min-w-[48px]"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                disabled={currentIndex === totalPages - 1}
                aria-label="Next blog posts"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border-2 border-gray-300 rounded-full p-4 shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] min-w-[48px]"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`w-12 h-12 rounded-full transition-colors flex items-center justify-center ${
                  i === currentIndex ? 'bg-blue-600' : 'bg-gray-400 hover:bg-gray-500'
                }`}
              >
                <span className={`w-3 h-3 rounded-full ${
                  i === currentIndex ? 'bg-white' : 'bg-white'
                }`} />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
