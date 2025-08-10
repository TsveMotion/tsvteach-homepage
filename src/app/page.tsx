import Head from 'next/head';
import NewHeroSection from '@/components/NewHeroSection';
import UniversityLogos from '@/components/UniversityLogos';
import FeaturesShowcase from '@/components/FeaturesShowcase';
import BlogCarousel from '@/components/BlogCarousel';
import FinalEmailCTA from '@/components/FinalEmailCTA';

export default function Home() {
  return (
    <>
      <Head>
        <title>TsvTeach - AI Tutor for UK Students | Join Our Waitlist</title>
        <meta name="description" content="Join TsvTeach's waitlist! AI-powered learning platform for UK students preparing for GCSEs and A-levels. Help us validate our idea - launching at 50 signups." />
        <meta name="keywords" content="TsvTeach, AI tutor, GCSE, A-level, UK students, waitlist, learning tool, study helper, education technology, validation, exam preparation, artificial intelligence" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="TsvTeach Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tsvteach.com/" />
        <meta property="og:title" content="TsvTeach - AI Tutor for UK Students | Join Our Waitlist" />
        <meta property="og:description" content="Join our waitlist! AI-powered learning platform for UK students. Help validate our idea - launching at 50 signups." />
        <meta property="og:image" content="https://tsvteach.com/og-image.jpg" />
        <meta property="og:site_name" content="TsvTeach" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="TsvTeach - AI Tutor for UK Students" />
        <meta property="twitter:description" content="Join our waitlist! AI-powered learning platform for UK students preparing for GCSEs and A-levels." />
        <meta property="twitter:image" content="https://tsvteach.com/og-image.jpg" />
        
        <link rel="canonical" href="https://tsvteach.com/" />
      </Head>
      
      <main className="min-h-screen bg-white">
        <NewHeroSection />
        <UniversityLogos />
        <FeaturesShowcase />
        <BlogCarousel />
        <FinalEmailCTA />
      </main>
    </>
  );
}
