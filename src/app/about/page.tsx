import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About TsvTeach - AI-Powered Learning Platform for UK Students',
  description: 'Learn about TsvTeach, the UK\'s leading AI tutoring platform helping students excel in GCSEs and A-levels. Our mission is to make quality education accessible to all.',
  keywords: 'TsvTeach about, AI tutoring, UK education, GCSE support, A-level help, educational technology',
};

export default function AboutPage() {
  return (
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
          <span className="text-black font-medium">About</span>
          <Link href="/gcse" className="text-gray-600 hover:text-black transition-colors">GCSE</Link>
          <Link href="/a-levels" className="text-gray-600 hover:text-black transition-colors">A-Levels</Link>
          <Link href="/blog" className="text-gray-600 hover:text-black transition-colors">Blog</Link>
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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            About TsvTeach
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to revolutionize education through AI-powered tutoring, 
            making quality learning accessible to every UK student.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              TsvTeach is transforming how UK students learn by combining artificial intelligence 
              with proven educational methodologies. We believe every student deserves access to 
              personalized, high-quality tutoring.
            </p>
            <p className="text-lg text-gray-600">
              Our AI tutor adapts to each student's learning style, pace, and needs, providing 
              instant feedback and guidance that helps them excel in their GCSEs and A-levels.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-black mb-4">Why TsvTeach?</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Personalized AI tutoring for every learning style
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                24/7 availability for instant help
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Comprehensive GCSE and A-level coverage
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Affordable pricing for all families
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-black text-white rounded-lg p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
            <p className="text-xl text-gray-300">
              Help us validate our vision and be part of the educational revolution
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">50</div>
              <div className="text-gray-300">Launch Target Signups</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Tutor Availability</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-gray-300">UK Curriculum Aligned</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our waitlist and be among the first to experience AI-powered tutoring.
          </p>
          <Link 
            href="/"
            className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg"
          >
            Join Waitlist Today
          </Link>
        </div>
      </div>
    </div>
  );
}
