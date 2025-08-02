import Head from 'next/head';
import Link from 'next/link';

const blogPosts = [
  {
    slug: 'best-gcse-ai-revision-tools-2025',
    title: 'Best GCSE AI Revision Tools 2025: TsvTeach vs Competitors',
    excerpt: 'Discover why TsvTeach is the leading AI-powered revision tool for GCSE students in 2025. Compare features, pricing, and results.',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'GCSE',
    keywords: 'GCSE AI revision tools, best GCSE apps 2025, TsvTeach review'
  },
  {
    slug: 'tsvteach-review-worth-it',
    title: 'TsvTeach Review: Is It Worth It for GCSE and A-Level Students?',
    excerpt: 'Honest review of TsvTeach from real students and parents. Find out if this AI learning platform is worth the investment.',
    date: '2025-01-10',
    readTime: '12 min read',
    category: 'Reviews',
    keywords: 'TsvTeach review, TsvTeach worth it, AI learning platform review'
  },
  {
    slug: 'how-tsvteach-helps-grade-9-english-lit',
    title: 'How TsvTeach Helps You Get a Grade 9 in English Literature',
    excerpt: 'Step-by-step guide showing how TsvTeach\'s AI tutor can help you achieve Grade 9 in GCSE English Literature with proven techniques.',
    date: '2025-01-05',
    readTime: '10 min read',
    category: 'Study Tips',
    keywords: 'Grade 9 English Literature, GCSE English tips, TsvTeach English'
  },
  {
    slug: 'a-level-maths-ai-tutor-guide',
    title: 'A-Level Maths with AI: How TsvTeach Makes Complex Topics Simple',
    excerpt: 'Master A-Level Mathematics with TsvTeach\'s AI tutor. Learn calculus, statistics, and pure maths with personalized AI assistance.',
    date: '2024-12-28',
    readTime: '9 min read',
    category: 'A-Level',
    keywords: 'A-Level Maths AI tutor, calculus help, TsvTeach maths'
  },
  {
    slug: 'gcse-science-revision-ai-powered',
    title: 'GCSE Science Revision Made Easy with AI-Powered Learning',
    excerpt: 'Transform your GCSE Science revision with TsvTeach\'s AI. Biology, Chemistry, and Physics explained clearly with interactive learning.',
    date: '2024-12-20',
    readTime: '7 min read',
    category: 'GCSE',
    keywords: 'GCSE Science revision, AI science tutor, TsvTeach science'
  },
  {
    slug: 'university-success-tsvteach-students',
    title: 'University Success Stories: How TsvTeach Students Got Into Top Unis',
    excerpt: 'Real success stories from TsvTeach students who secured places at Oxford, Cambridge, and other top UK universities.',
    date: '2024-12-15',
    readTime: '15 min read',
    category: 'Success Stories',
    keywords: 'university success, Oxford Cambridge, TsvTeach results'
  }
];

export default function BlogPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://tsvteach.com/blog" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "TsvTeach Blog",
              "description": "Expert AI-powered learning tips, study guides, and educational insights",
              "url": "https://tsvteach.com/blog",
              "publisher": {
                "@type": "Organization",
                "name": "TsvTeach",
                "logo": "https://tsvteach.com/logo.png"
              },
              "mainEntity": blogPosts.map(post => ({
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.excerpt,
                "url": `https://tsvteach.com/blog/${post.slug}`,
                "datePublished": post.date,
                "author": {
                  "@type": "Organization",
                  "name": "TsvTeach"
                }
              }))
            })
          }}
        />
      </Head>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.slug} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-[#00f400] text-black px-3 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">{post.readTime}</span>
            </div>
            
            <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
              <Link href={`/blog/${post.slug}`} className="hover:text-[#00f400] transition-colors">
                {post.title}
              </Link>
            </h2>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{new Date(post.date).toLocaleDateString('en-GB', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
              <Link 
                href={`/blog/${post.slug}`}
                className="text-[#00f400] font-semibold hover:text-[#00e600] transition-colors"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-[#00f400] to-[#00e600] rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold text-black mb-4">Ready to Transform Your Learning?</h2>
        <p className="text-lg text-black mb-6">
          Join thousands of students already using <strong>TsvTeach</strong> to achieve top grades in GCSEs and A-levels.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300"
        >
          Start Learning with TsvTeach
        </Link>
      </div>
    </>
  );
}
