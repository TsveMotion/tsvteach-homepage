interface Breadcrumb {
  name: string;
  url: string;
}

interface Question {
  question: string;
  answer: string;
}

interface SchemaData {
  questions?: Question[];
  breadcrumbs?: Breadcrumb[];
}

interface SchemaProps {
  type: 'organization' | 'faq' | 'breadcrumb';
  data?: SchemaData;
}

export default function EnhancedSchema({ type, data }: SchemaProps) {
  let schema = {};

  switch (type) {
    case 'organization':
      schema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "TsvTeach",
        "url": "https://tsvteach.com",
        "logo": "https://tsvteach.com/logo.png",
        "description": "AI-powered learning platform for UK students preparing for GCSEs and A-levels",
        "foundingDate": "2024",
        "location": {
          "@type": "Place",
          "addressCountry": "GB"
        },
        "sameAs": [
          "https://twitter.com/TsvTeach"
        ],
        "serviceType": "Educational Technology",
        "audience": {
          "@type": "EducationalAudience",
          "educationalRole": "student"
        }
      };
      break;
    
    case 'faq':
      schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data?.questions?.map((q: Question) => ({
          "@type": "Question",
          "name": q.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": q.answer
          }
        })) || []
      };
      break;
      
    case 'breadcrumb':
      schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": data?.breadcrumbs?.map((item: Breadcrumb, index: number) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        })) || []
      };
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}
