import Link from 'next/link';

export default function Custom500() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
        500 - Server Error
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2 mb-4">
        Oops! Something went wrong on our end.
      </p>
      <Link
        href="/"
        className="text-blue-600 hover:underline dark:text-blue-400"
      >
        Try Again or Go Home
      </Link>
    </div>
  );
}
