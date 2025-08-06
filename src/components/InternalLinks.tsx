import Link from 'next/link';

export default function InternalLinks() {
  const keyPages = [
    {
      title: 'Imperial College Medicine Guide',
      url: '/blog/imperial-college-medicine-2025-application-guide',
      description: 'Complete 2025 application strategy'
    },
    {
      title: 'GCSE AI Revision Tools',
      url: '/blog/best-gcse-ai-revision-tools-2025',
      description: 'Top AI tools for GCSE success'
    },
    {
      title: 'A-Level Maths AI Tutor',
      url: '/blog/a-level-maths-ai-tutor-guide',
      description: 'Master A-Level Maths with AI'
    },
    {
      title: 'UCAT 3000+ Score Guide',
      url: '/blog/ucat-preparation-ai-tutor-3000-score',
      description: 'Achieve top UCAT scores'
    }
  ];

  return (
    <div className="bg-gray-50 rounded-lg p-6 my-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {keyPages.map((page, index) => (
          <Link
            key={index}
            href={page.url}
            className="block p-4 bg-white rounded-lg border hover:border-green-500 transition-colors"
          >
            <h4 className="font-semibold text-gray-900 mb-2">{page.title}</h4>
            <p className="text-sm text-gray-600">{page.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
