import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A-Level AI Tutoring - University Success with TsvTeach | AI-Powered Learning',
  description: 'Excel in your A-Levels with TsvTeach\'s AI tutor. Get into top universities with personalized support for all A-Level subjects and proven university preparation strategies.',
  keywords: 'A-Level tutoring, AI tutor, university preparation, A-Level subjects, Oxford, Cambridge, Russell Group, exam preparation',
};

export default function ALevelsPage() {
  const subjects = [
    'Mathematics', 'Further Mathematics', 'English Literature', 'Biology',
    'Chemistry', 'Physics', 'History', 'Geography', 'Psychology', 'Economics',
    'Business Studies', 'Computer Science', 'Art & Design', 'French', 'Spanish',
    'German', 'Politics', 'Philosophy', 'Media Studies', 'Sociology'
  ];

  const universities = [
    'Oxford', 'Cambridge', 'Imperial College London', 'UCL', 'King\'s College London',
    'Edinburgh', 'Manchester', 'Warwick', 'LSE', 'Bristol', 'Durham', 'St Andrews'
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
          <Link href="/gcse" className="text-gray-600 hover:text-black transition-colors">GCSE</Link>
          <span className="text-black font-medium">A-Levels</span>
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
            A-Level AI Tutoring
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get into your dream university with our AI tutor. Personalized support for all A-Level subjects, 
            university application guidance, and strategies for top grades.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-black mb-4">University Preparation</h3>
            <p className="text-gray-600">
              Get tailored advice for Oxford, Cambridge, and Russell Group applications. 
              Our AI helps you stand out with exceptional A-Level performance.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold text-black mb-4">Advanced Learning</h3>
            <p className="text-gray-600">
              Master complex A-Level concepts with our AI tutor's advanced explanations, 
              step-by-step problem solving, and critical thinking development.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-black mb-4">Performance Analytics</h3>
            <p className="text-gray-600">
              Track your progress with detailed analytics, predicted grades, and 
              personalized study plans to maximize your A-Level results.
            </p>
          </div>
        </div>

        {/* University Success Section */}
        <div className="bg-black text-white rounded-lg p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">University Success Stories</h2>
            <p className="text-xl text-gray-300">
              Our students gain places at top universities across the UK
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {universities.map((university, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3 text-center">
                <span className="text-white font-medium">{university}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-300 text-lg">
              Join our waitlist and be part of the next success story
            </p>
          </div>
        </div>

        {/* Subjects Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black text-center mb-12">
            A-Level Subjects We Cover
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {subjects.map((subject, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <span className="text-gray-700 font-medium">{subject}</span>
              </div>
            ))}
          </div>
        </div>

        {/* A* Strategy */}
        <div className="bg-gray-50 rounded-lg p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-4">A* Achievement Strategy</h2>
            <p className="text-xl text-gray-600">
              Our proven approach to achieving top A-Level grades
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-black mb-4">🎯 Targeted Learning</h3>
              <p className="text-gray-600 mb-6">
                Focus on exam board specifications and mark schemes to understand 
                exactly what examiners are looking for in A* responses.
              </p>
              <h3 className="text-xl font-bold text-black mb-4">📝 Essay Technique</h3>
              <p className="text-gray-600">
                Master essay structure, critical analysis, and argumentation skills 
                essential for A-Level success in humanities subjects.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-4">🔬 Practical Skills</h3>
              <p className="text-gray-600 mb-6">
                Develop laboratory techniques, data analysis, and scientific 
                methodology for science A-Levels.
              </p>
              <h3 className="text-xl font-bold text-black mb-4">📈 Exam Preparation</h3>
              <p className="text-gray-600">
                Practice with past papers, timed conditions, and detailed feedback 
                to build confidence and exam technique.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Ready for University Success?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our waitlist and be among the first to experience AI-powered A-Level tutoring.
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
