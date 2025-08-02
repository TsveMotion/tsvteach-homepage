import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About TsvTeach - AI-Powered Learning Platform for UK Students',
  description: 'Learn about TsvTeach, the leading AI-powered educational platform helping UK students excel in GCSEs and A-levels. Our mission is to revolutionize learning.',
  keywords: 'TsvTeach about, AI education, GCSE help, A-level tutoring, UK students, educational technology',
  openGraph: {
    title: 'About TsvTeach - AI-Powered Learning Platform',
    description: 'Learn about TsvTeach\'s mission to help UK students excel in GCSEs and A-levels with AI-powered learning tools.',
    url: 'https://tsvteach.com/about',
  },
};

export default function About() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://tsvteach.com/about" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About TsvTeach",
              "description": "Learn about TsvTeach, the AI-powered learning platform for UK students",
              "url": "https://tsvteach.com/about",
              "mainEntity": {
                "@type": "EducationalOrganization",
                "name": "TsvTeach",
                "description": "AI-powered learning platform for UK students preparing for GCSEs and A-levels",
                "foundingDate": "2024",
                "location": "United Kingdom",
                "audience": {
                  "@type": "EducationalAudience",
                  "audienceType": "student",
                  "educationalLevel": ["GCSE", "A-Level"]
                }
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-[#00f400]">TsvTeach</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing education for UK students with AI-powered learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>TsvTeach</strong> is dedicated to helping UK students achieve their academic goals through innovative AI-powered learning tools. We specialize in GCSE and A-level preparation, making complex subjects accessible and engaging.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TsvTeach?</h2>
              <ul className="text-lg text-gray-700 space-y-3">
                <li>✅ AI-powered personalized learning</li>
                <li>✅ GCSE & A-level focused content</li>
                <li>✅ UK curriculum aligned</li>
                <li>✅ Proven results for students</li>
                <li>✅ Interactive learning experience</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#00f400] to-[#00e600] rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Join Thousands of Successful Students</h2>
            <p className="text-lg text-black mb-6">
              <strong>TsvTeach</strong> has helped thousands of UK students improve their grades and achieve their academic dreams. Start your journey to success today.
            </p>
            <a 
              href="/" 
              className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300"
            >
              Get Started with TsvTeach
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
