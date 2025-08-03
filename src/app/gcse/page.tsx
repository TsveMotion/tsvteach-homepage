import Head from 'next/head';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GCSE AI Tutor | TsvTeach - Get Grade 9s with AI-Powered Learning',
  description: 'TsvTeach&apos;s GCSE AI tutor helps UK students achieve Grade 9s in all subjects. Interactive AI-powered learning, personalized study plans, and exam preparation.',
  keywords: 'GCSE AI tutor, Grade 9 GCSE, GCSE revision, TsvTeach GCSE, AI learning GCSE, GCSE help UK, GCSE exam preparation',
  openGraph: {
    title: 'GCSE AI Tutor | TsvTeach - Get Grade 9s',
    description: 'AI-powered GCSE tutoring from TsvTeach. Personalized learning plans to help you achieve Grade 9s in all subjects.',
    url: 'https://tsvteach.com/gcse',
  },
};

export default function GCSE() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://tsvteach.com/gcse" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "GCSE AI Tutoring by TsvTeach",
              "description": "AI-powered GCSE tutoring helping UK students achieve Grade 9s in all subjects",
              "provider": {
                "@type": "EducationalOrganization",
                "name": "TsvTeach",
                "url": "https://tsvteach.com"
              },
              "educationalLevel": "GCSE",
              "courseMode": "online",
              "audience": {
                "@type": "EducationalAudience",
                "audienceType": "student",
                "educationalLevel": "GCSE"
              },
              "availableLanguage": "en-GB",
              "locationCreated": "United Kingdom"
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-[#00f400]">TsvTeach</span> GCSE AI Tutor
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Achieve Grade 9s with AI-powered GCSE tutoring designed for UK students
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Grade 9 Focus</h3>
              <p className="text-gray-700">
                <strong>TsvTeach</strong>&apos;s AI tutor is specifically designed to help students achieve Grade 9s in all GCSE subjects.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered</h3>
              <p className="text-gray-700">
                Advanced AI technology personalizes learning paths based on your strengths and weaknesses.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">All Subjects</h3>
              <p className="text-gray-700">
                Complete GCSE coverage: Maths, English, Science, Languages, Humanities, and more.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Why <span className="text-[#00f400]">TsvTeach</span> for GCSE?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">✅ Proven Results</h3>
                <p className="text-gray-700 mb-4">Students using TsvTeach see average grade improvements of 2+ levels</p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">✅ UK Curriculum Aligned</h3>
                <p className="text-gray-700 mb-4">Perfect alignment with AQA, OCR, Edexcel, and WJEC specifications</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">✅ Interactive Learning</h3>
                <p className="text-gray-700 mb-4">Engaging AI-powered exercises, quizzes, and personalized feedback</p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">✅ Exam Preparation</h3>
                <p className="text-gray-700 mb-4">Past papers, mark schemes, and examiner insights powered by AI</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#00f400] to-[#00e600] rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Start Your GCSE Success Journey</h2>
            <p className="text-lg text-black mb-6">
              Join thousands of UK students achieving Grade 9s with <strong>TsvTeach</strong>&#39;s AI-powered GCSE tutoring.
            </p>
            <Link 
              href="/" 
              className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300"
            >
              Get Started with TsvTeach GCSE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
