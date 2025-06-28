import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2 mb-4">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="text-blue-600 hover:underline dark:text-blue-400"
      >
        Go back home
      </Link>
    </div>
  );
}
