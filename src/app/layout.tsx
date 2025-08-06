import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TsvTeach - AI Tutor for UK Students | Join Our Waitlist",
  description: "Join TsvTeach's waitlist! AI-powered learning platform for UK students preparing for GCSEs and A-levels. Help us validate our idea - launching at 1,000 signups.",
  keywords: "TsvTeach, AI tutor, GCSE, A-level, UK students, waitlist, learning platform, study helper, validation, early access",
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
    title: "TsvTeach - AI Tutor for UK Students | Join Our Waitlist",
    description: "Join our waitlist! AI-powered learning platform for UK students. Help validate our idea - launching at 1,000 signups.",
    url: 'https://tsvteach.com',
    siteName: 'TsvTeach',
    locale: 'en_GB',
    type: 'website',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'TsvTeach - AI Tutor Waitlist for UK Students',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "TsvTeach - AI Tutor for UK Students",
    description: "Join our waitlist! AI-powered learning platform for UK students preparing for GCSEs and A-levels.",
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
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
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
        <GoogleAnalytics />
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
