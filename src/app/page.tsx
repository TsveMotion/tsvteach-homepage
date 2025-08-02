import Image from "next/image";
import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import WhyTsvTeachSection from '@/components/WhyTsvTeachSection';
import FeatureSection from '@/components/FeatureSection';
import FinalCTASection from '@/components/FinalCTASection';

export default function Home() {
  return (
    <>
      <Head>
        <title>TsvTeach | AI-Powered Learning Tool for UK Students | GCSEs & A-Levels</title>
        <meta name="description" content="TsvTeach helps UK students achieve top grades with AI-powered tools, GCSE resources, A-level preparation, and interactive learning. Smart studying starts here." />
        <meta name="keywords" content="TsvTeach, GCSE AI tutor, A-level AI tutor, AI learning, top grades UK students, GCSE revision, A-level revision, UK education, smart studying, exam preparation" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="TsvTeach Team" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tsvteach.com/" />
        <meta property="og:title" content="TsvTeach - AI-Powered Learning Tool for UK Students" />
        <meta property="og:description" content="AI-powered learning platform helping UK students excel in GCSEs and A-levels. Join thousands improving their grades with TsvTeach." />
        <meta property="og:image" content="https://tsvteach.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="TsvTeach - AI Learning Platform for UK Students" />
        <meta property="og:site_name" content="TsvTeach" />
        <meta property="og:locale" content="en_GB" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tsvteach.com/" />
        <meta property="twitter:title" content="TsvTeach - AI-Powered Learning Tool for UK Students" />
        <meta property="twitter:description" content="AI-powered learning platform helping UK students excel in GCSEs and A-levels. Smart studying starts here." />
        <meta property="twitter:image" content="https://tsvteach.com/og-image.jpg" />
        <meta property="twitter:image:alt" content="TsvTeach Logo - AI Learning Platform" />
        <meta property="twitter:creator" content="@TsvTeach" />
        <meta property="twitter:site" content="@TsvTeach" />
        
        {/* Additional SEO tags */}
        <meta name="theme-color" content="#00f400" />
        <meta name="msapplication-TileColor" content="#00f400" />
        <link rel="canonical" href="https://tsvteach.com/" />
        <link rel="alternate" hrefLang="en-gb" href="https://tsvteach.com/" />
        
        {/* Structured Data for TsvTeach Brand */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "TsvTeach - AI-Powered Learning Tool for UK Students",
              "description": "TsvTeach helps UK students achieve top grades with AI-powered tools, GCSE resources, and interactive learning.",
              "url": "https://tsvteach.com",
              "mainEntity": {
                "@type": "EducationalOrganization",
                "name": "TsvTeach",
                "alternateName": ["TsvTeach.com", "TSV Teach"],
                "description": "Leading AI-powered learning platform for UK students preparing for GCSEs and A-levels",
                "url": "https://tsvteach.com",
                "logo": "https://tsvteach.com/logo.png",
                "image": "https://tsvteach.com/og-image.jpg",
                "sameAs": [
                  "https://www.instagram.com/tsvteach",
                  "https://www.twitter.com/tsvteach",
                  "https://www.linkedin.com/company/tsvteach",
                  "https://www.facebook.com/tsvteach"
                ],
                "areaServed": "United Kingdom",
                "audience": {
                  "@type": "EducationalAudience",
                  "audienceType": "student",
                  "educationalLevel": ["GCSE", "A-Level"]
                },
                "serviceType": "AI-powered educational technology",
                "availableLanguage": "en-GB"
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [{
                  "@type": "ListItem",
                  "position": 1,
                  "name": "TsvTeach Home",
                  "item": "https://tsvteach.com"
                }]
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen">
        <HeroSection />
        <WhyTsvTeachSection />
        <FeatureSection />
        <FinalCTASection />
      </div>
    </>
  );
}
