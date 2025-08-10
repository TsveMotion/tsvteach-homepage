import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learning Hub - AI-Powered Study Tips & Educational Insights | TsvTeach',
  description: 'Expert AI-powered learning tips, GCSE revision guides, A-level study strategies, and educational insights. Join thousands of UK students achieving academic success with TsvTeach.',
  keywords: 'AI learning, GCSE study tips, A-level revision, exam preparation, educational blog, UK students, artificial intelligence tutoring, study guides, academic success, learning strategies',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  authors: [{ name: 'TsvTeach Team' }],
  openGraph: {
    title: 'Learning Hub - AI-Powered Study Tips | TsvTeach',
    description: 'Expert AI-powered educational content for UK students. Study tips, revision guides, and success strategies for GCSE and A-level excellence.',
    url: 'https://tsvteach.com/blog',
    siteName: 'TsvTeach',
    type: 'website',
    images: [
      {
        url: 'https://tsvteach.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TsvTeach Learning Hub - AI-Powered Educational Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learning Hub - AI Study Tips | TsvTeach',
    description: 'Expert AI-powered study tips and educational insights for UK students',
    images: ['https://tsvteach.com/og-image.jpg'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
}
