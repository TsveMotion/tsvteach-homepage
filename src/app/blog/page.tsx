'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const blogPosts = [
  {
    slug: 'tsvteach-vs-khan-academy-uk-students',
    title: 'TsvTeach vs Khan Academy: Which AI Tutor is Better for UK Students?',
    excerpt: 'Comprehensive comparison of TsvTeach and Khan Academy for UK students. Discover which platform offers better GCSE and A-Level support.',
    date: '2025-02-01',
    readTime: '8 min read',
    category: 'Comparisons'
  },
  {
    slug: 'free-gcse-apps-vs-tsvteach-premium',
    title: 'Free GCSE Revision Apps vs TsvTeach: Why Premium Wins',
    excerpt: 'Detailed analysis of free GCSE apps versus TsvTeach premium features. Understand the true cost of free education apps.',
    date: '2025-02-01',
    readTime: '10 min read',
    category: 'Reviews'
  },
  {
    slug: 'best-a-level-subjects-medicine-ai-guide',
    title: 'Best A-Level Subjects for Medicine: AI Tutor\'s Complete Guide',
    excerpt: 'Complete guide to choosing A-Level subjects for Medicine with AI tutoring support. University requirements and success strategies.',
    date: '2025-02-01',
    readTime: '12 min read',
    category: 'A-Level'
  },
  {
    slug: 'gcse-grade-boundaries-2025-grade-9-strategy',
    title: 'GCSE Grade Boundaries 2025: How to Guarantee Grade 9s',
    excerpt: 'Complete guide to GCSE grade boundaries 2025 and proven strategies to achieve Grade 9s with AI tutoring support.',
    date: '2025-02-01',
    readTime: '15 min read',
    category: 'GCSE'
  },
  {
    slug: 'ucat-preparation-ai-tutor-3000-score',
    title: 'UCAT Preparation with AI: How to Score 3000+ in 2025',
    excerpt: 'Master the UCAT with AI tutoring. Complete preparation guide and proven techniques to score 3000+ for medical school success.',
    date: '2025-02-05',
    readTime: '18 min read',
    category: 'Medical School'
  },
  {
    slug: 'oxford-medicine-requirements-2025-complete-guide',
    title: 'Oxford Medicine Requirements 2025: Complete Application Guide',
    excerpt: 'Everything you need for Oxford Medicine 2025: requirements, UCAT scores, interview prep. How TsvTeach students gain advantage.',
    date: '2025-02-10',
    readTime: '20 min read',
    category: 'Medical School'
  },
  {
    slug: 'imperial-college-medicine-2025-application-guide',
    title: 'Imperial College London Medicine 2025: Complete Application Guide',
    excerpt: 'Complete strategy for Imperial Medicine 2025: requirements, UCAT scores, interview preparation, and competitive advantages.',
    date: '2025-02-15',
    readTime: '16 min read',
    category: 'Medical School'
  },
  {
    slug: 'best-gcse-ai-revision-tools-2025',
    title: 'Best GCSE AI Revision Tools 2025: TsvTeach vs Competitors',
    excerpt: 'Discover why TsvTeach is the leading AI-powered revision tool for GCSE students in 2025. Compare features, pricing, and results.',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'GCSE'
  },
  {
    slug: 'a-level-maths-ai-tutor-guide',
    title: 'A-Level Maths with AI: How TsvTeach Makes Complex Topics Simple',
    excerpt: 'Master A-Level Mathematics with TsvTeach\'s AI tutor. Learn calculus, statistics, and pure maths with personalized AI assistance.',
    date: '2024-12-28',
    readTime: '9 min read',
    category: 'A-Level'
  },
  {
    slug: 'university-success-tsvteach-students',
    title: 'University Success Stories: How TsvTeach Students Achieve Their Dreams',
    excerpt: 'Real stories from TsvTeach students who achieved top grades and secured places at prestigious universities including Oxford, Cambridge, and Imperial.',
    date: '2024-12-15',
    readTime: '11 min read',
    category: 'Success Stories'
  }
];

const categories = ['All', 'Medical School', 'GCSE', 'A-Level', 'Comparisons', 'Reviews', 'Success Stories'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      <Head>
        <title>TsvTeach Blog | AI Learning Insights for UK Students</title>
        <meta name="description" content="Expert insights on AI learning, GCSE revision, A-Level preparation, and university applications. Tips and strategies from TsvTeach's AI tutoring platform." />
        <meta name="keywords" content="TsvTeach blog, AI learning, GCSE revision, A-Level preparation, study tips, UK education" />
        <link rel="canonical" href="https://tsvteach.com/blog" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "TsvTeach Blog",
              "description": "Expert AI-powered learning tips, study guides, and educational insights",
              "url": "https://tsvteach.com/blog",
              "publisher": {
                "@type": "Organization",
                "name": "TsvTeach",
                "logo": "https://tsvteach.com/logo.png"
              },
              "mainEntity": blogPosts.map(post => ({
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.excerpt,
                "url": `https://tsvteach.com/blog/${post.slug}`,
                "datePublished": post.date,
                "author": {
                  "@type": "Organization",
                  "name": "TsvTeach"
                }
              }))
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <Link href="/" className="flex items-center">
            <Image 
              src="/LongLogo.png" 
              alt="TsvTeach Logo" 
              width={180}
              height={24}
              className="h-8 w-auto" 
              priority
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-black transition-colors">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-black transition-colors">About</Link>
            <Link href="/gcse" className="text-gray-600 hover:text-black transition-colors">GCSE</Link>
            <Link href="/a-levels" className="text-gray-600 hover:text-black transition-colors">A-Levels</Link>
            <span className="text-black font-medium">Blog</span>
          </div>
          
          <Link 
            href="/" 
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Get Started
          </Link>
        </nav>

        <div className="max-w-6xl mx-auto px-6 pt-20 pb-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Learning Hub
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Expert insights, study strategies, and success stories from the UK's leading AI tutoring platform
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full mb-4">
                      {post.category}
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-xl font-bold text-black mb-3 leading-tight">
                      {post.title}
                    </h2>
                    
                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    
                    {/* Meta */}
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{new Date(post.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Email Signup CTA */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center mt-16">
            <h2 className="text-3xl font-bold text-black mb-4">
              Get the latest study insights
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of students getting AI-powered learning tips, study strategies, and success stories delivered to their inbox.
            </p>
            <Link 
              href="/" 
              className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Start Learning with TsvTeach AI
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
