import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-lg">
      
        <h1 className="text-6xl font-heading font-bold text-gray-900 mb-2">404</h1>
        <h2 className="text-3xl font-heading font-semibold text-gray-800 mb-4">
          Oops! Page not found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved to a different URL.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
