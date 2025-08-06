export function generateStructuredData(page: {
  title: string;
  description: string;
  url: string;
  type?: 'website' | 'article' | 'blog';
  publishDate?: string;
  modifiedDate?: string;
  author?: string;
  image?: string;
}) {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": page.type === 'article' || page.type === 'blog' ? "BlogPosting" : "WebPage",
    "headline": page.title,
    "description": page.description,
    "url": page.url,
    "mainEntityOfPage": page.url,
    "publisher": {
      "@type": "Organization",
      "name": "TsvTeach",
      "url": "https://tsvteach.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tsvteach.com/logo.png"
      }
    }
  };

  if (page.type === 'article' || page.type === 'blog') {
    return {
      ...baseStructuredData,
      "author": {
        "@type": "Organization",
        "name": page.author || "TsvTeach Editorial Team"
      },
      "datePublished": page.publishDate || new Date().toISOString(),
      "dateModified": page.modifiedDate || new Date().toISOString(),
      "image": page.image || "https://tsvteach.com/og-image.jpg",
      "articleSection": "Education"
    };
  }

  return baseStructuredData;
}

export function generateMetadata(page: {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}) {
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    robots: {
      index: !page.noIndex,
      follow: !page.noIndex,
    },
    alternates: {
      canonical: page.canonical,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.canonical,
      siteName: 'TsvTeach',
      locale: 'en_GB',
      type: 'website',
      images: [{
        url: page.ogImage || '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: page.title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [page.ogImage || '/og-image.jpg'],
    },
  };
}
