import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 md:px-6 py-4 bg-white border-b border-gray-100">
        <Link href="/" className="flex items-center">
          <Image 
            src="/LongLogo.png" 
            alt="TsvTeach Logo" 
            width={180}
            height={24}
            className="h-8 w-auto" 
            priority
          />
        </Link>
        
        <Link 
          href="/" 
          className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm md:text-base"
        >
          Go Home
        </Link>
      </nav>

      {/* 404 Content */}
      <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          {/* 404 Icon */}
          <div className="mb-8">
            <div className="text-6xl mb-4">🤖</div>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">404</h1>
          </div>
          
          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Oops! It looks like our AI tutor couldn't find the page you're looking for. 
              Let's get you back on track with your learning journey.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Back to Home
            </Link>
            <Link 
              href="/blog"
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Browse Learning Hub
            </Link>
          </div>

          {/* Additional Help */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Need Help?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              If you think this is an error, or if you're looking for something specific, 
              feel free to join our waitlist and get early access to TsvTeach.
            </p>
            <Link 
              href="/"
              className="inline-block bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
