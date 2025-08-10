import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GCSE AI Tutoring - Get Grade 9s with TsvTeach | AI-Powered Learning',
  description: 'Excel in your GCSEs with TsvTeach\'s AI tutor. Personalized support for all GCSE subjects, proven strategies to achieve Grade 9s, and 24/7 availability.',
  keywords: 'GCSE tutoring, AI tutor, Grade 9 strategy, GCSE revision, UK education, GCSE subjects, exam preparation',
};

export default function GCSEPage() {
  const subjects = [
    'Mathematics', 'English Language', 'English Literature', 'Science (Combined)',
    'Biology', 'Chemistry', 'Physics', 'History', 'Geography', 'French',
    'Spanish', 'German', 'Computer Science', 'Art & Design', 'Music', 'PE'
  ];

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
          <Link href="/about" className="text-gray-600 hover:text-black transition-colors">About</Link>
          <span className="text-black font-medium">GCSE</span>
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
            GCSE AI Tutoring
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Achieve Grade 9s with our AI tutor. Personalized support for all GCSE subjects, 
            adaptive learning, and proven strategies to excel in your exams.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-black mb-4">Targeted Learning</h3>
            <p className="text-gray-600">
              Our AI identifies your weak areas and creates personalized learning paths 
              to help you achieve Grade 9s in every subject.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-black mb-4">All Subjects Covered</h3>
            <p className="text-gray-600">
              From Maths and English to Sciences and Humanities, get expert AI tutoring 
              across all GCSE subjects with curriculum-aligned content.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-black mb-4">Instant Feedback</h3>
            <p className="text-gray-600">
              Get immediate explanations, step-by-step solutions, and personalized hints 
              to understand concepts and improve your performance.
            </p>
          </div>
        </div>

        {/* Subjects Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black text-center mb-12">
            GCSE Subjects We Cover
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {subjects.map((subject, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <span className="text-gray-700 font-medium">{subject}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Grade 9 Strategy */}
        <div className="bg-black text-white rounded-lg p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Grade 9 Strategy</h2>
            <p className="text-xl text-gray-300">
              Our proven approach to achieving the highest GCSE grades
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Smart Revision</h3>
              <p className="text-gray-300 mb-6">
                AI-powered spaced repetition ensures you remember key concepts and 
                formulas when it matters most in your exams.
              </p>
              <h3 className="text-xl font-bold text-green-400 mb-4">Exam Technique</h3>
              <p className="text-gray-300">
                Learn how to approach different question types, manage time effectively, 
                and maximize marks with our exam strategies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Practice Papers</h3>
              <p className="text-gray-300 mb-6">
                Access unlimited practice questions and past papers with instant 
                marking and detailed explanations.
              </p>
              <h3 className="text-xl font-bold text-green-400 mb-4">Progress Tracking</h3>
              <p className="text-gray-300">
                Monitor your improvement with detailed analytics and personalized 
                recommendations for further study.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Ready to Achieve Grade 9s?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our waitlist and be among the first to experience AI-powered GCSE tutoring.
          </p>
          <Link 
            href="/"
            className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg"
          >
            Join Waitlist Now
          </Link>
        </div>
      </div>
    </div>
  );
}
