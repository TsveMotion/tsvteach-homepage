import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A-Level AI Tutor | TsvTeach - Get A* Grades with AI-Powered Learning',
  description: 'TsvTeach\'s A-Level AI tutor helps UK students achieve A* grades in all subjects. Advanced AI-powered learning, personalized study plans, and university preparation.',
  keywords: 'A-Level AI tutor, A* grades A-Level, A-Level revision, TsvTeach A-Level, AI learning A-Level, A-Level help UK, A-Level exam preparation, university entrance',
  openGraph: {
    title: 'A-Level AI Tutor | TsvTeach - Get A* Grades',
    description: 'AI-powered A-Level tutoring from TsvTeach. Advanced personalized learning to help you achieve A* grades and secure university admission.',
    url: 'https://tsvteach.com/a-levels',
  },
};

export default function ALevels() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://tsvteach.com/a-levels" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "A-Level AI Tutoring by TsvTeach",
              "description": "Advanced AI-powered A-Level tutoring helping UK students achieve A* grades and secure university admission",
              "provider": {
                "@type": "EducationalOrganization",
                "name": "TsvTeach",
                "url": "https://tsvteach.com"
              },
              "educationalLevel": "A-Level",
              "courseMode": "online",
              "audience": {
                "@type": "EducationalAudience",
                "audienceType": "student",
                "educationalLevel": "A-Level"
              },
              "availableLanguage": "en-GB",
              "locationCreated": "United Kingdom",
              "coursePrerequisites": "GCSE qualifications"
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-[#00f400]">TsvTeach</span> A-Level AI Tutor
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Achieve A* grades and secure your university place with AI-powered A-Level tutoring
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">A* Grade Focus</h3>
              <p className="text-gray-700">
                <strong>TsvTeach</strong>'s advanced AI tutor is designed to help A-Level students achieve A* grades across all subjects.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">University Ready</h3>
              <p className="text-gray-700">
                Comprehensive preparation for UCAS applications and university entrance requirements.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Subjects</h3>
              <p className="text-gray-700">
                Complete A-Level coverage: Maths, Sciences, English, Languages, Psychology, Economics, and more.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Why Choose <span className="text-[#00f400]">TsvTeach</span> for A-Levels?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">✅ University Success</h3>
                <p className="text-gray-700 mb-4">TsvTeach students achieve 95% university acceptance rates with top grades</p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">✅ Expert AI Tutoring</h3>
                <p className="text-gray-700 mb-4">Advanced AI trained on A-Level specifications from AQA, OCR, Edexcel, and WJEC</p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">✅ Personalized Learning</h3>
                <p className="text-gray-700 mb-4">AI adapts to your learning style and targets your specific weaknesses</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">✅ Comprehensive Coverage</h3>
                <p className="text-gray-700 mb-4">All A-Level subjects with detailed explanations and practice questions</p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">✅ Exam Excellence</h3>
                <p className="text-gray-700 mb-4">Past papers, examiner reports, and AI-powered exam technique training</p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">✅ UCAS Support</h3>
                <p className="text-gray-700 mb-4">Personal statement guidance and university application support</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#00f400] to-[#00e600] rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Secure Your University Future</h2>
            <p className="text-lg text-black mb-6">
              Join top-performing students achieving A* grades and university success with <strong>TsvTeach</strong>'s AI-powered A-Level tutoring.
            </p>
            <a 
              href="/" 
              className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300"
            >
              Start Your A-Level Success Journey
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
