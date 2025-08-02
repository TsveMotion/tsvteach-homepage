import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TsvTeach Blog - AI Learning Tips, GCSE & A-Level Study Guides',
  description: 'Expert tips, study guides, and insights from TsvTeach. Learn how AI can help you excel in GCSEs and A-levels with our comprehensive blog.',
  keywords: 'TsvTeach blog, GCSE study tips, A-level revision, AI learning, study guides, exam preparation, educational blog',
  openGraph: {
    title: 'TsvTeach Blog - AI Learning & Study Tips',
    description: 'Expert educational content from TsvTeach. AI-powered study tips and guides for GCSE and A-level success.',
    url: 'https://tsvteach.com/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#00f400]">TsvTeach</span> Blog
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Expert AI-powered learning tips, study guides, and educational insights to help you excel in GCSEs and A-levels
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
