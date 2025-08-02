import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TsvTeach - AI-Powered Learning Tool for UK Students | GCSEs & A-Levels",
  description: "TsvTeach is the leading AI-powered learning platform helping UK students excel in GCSEs and A-levels. Smart studying starts here with personalized AI tutoring and exam preparation.",
  keywords: "TsvTeach, AI learning, GCSE, A-levels, UK students, exam preparation, AI tutor, online learning, study tool, education technology, smart studying",
  authors: [{ name: "TsvTeach Team" }],
  creator: "TsvTeach",
  publisher: "TsvTeach",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tsvteach.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "TsvTeach - AI-Powered Learning Tool for UK Students",
    description: "The AI-powered learning platform helping UK students ace GCSEs and A-levels. Join thousands of students improving their grades with TsvTeach.",
    url: 'https://tsvteach.com',
    siteName: 'TsvTeach',
    locale: 'en_GB',
    type: 'website',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'TsvTeach - AI Learning Platform for UK Students',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "TsvTeach - AI-Powered Learning Tool for UK Students",
    description: "The AI-powered learning platform helping UK students ace GCSEs and A-levels. Smart studying starts here.",
    creator: '@TsvTeach',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "TsvTeach",
              "url": "https://tsvteach.com",
              "description": "AI-powered learning platform for UK students preparing for GCSEs and A-levels",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://tsvteach.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "TsvTeach",
                "url": "https://tsvteach.com",
                "description": "Leading AI-powered educational technology company specializing in GCSE and A-level preparation for UK students"
              },
              "mainEntity": {
                "@type": "EducationalOrganization",
                "name": "TsvTeach",
                "description": "AI-powered learning tool helping UK students excel in GCSEs and A-levels",
                "url": "https://tsvteach.com",
                "sameAs": [
                  "https://twitter.com/TsvTeach",
                  "https://facebook.com/TsvTeach",
                  "https://linkedin.com/company/tsvteach"
                ],
                "areaServed": "United Kingdom",
                "educationalLevel": ["GCSE", "A-Level"],
                "teaches": "Academic subjects for UK secondary education"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
