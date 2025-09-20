export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            DevUtils
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            A comprehensive SaaS toolkit with 47+ utilities for developers
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <p className="text-gray-600 dark:text-gray-300">
              Welcome to DevUtils! This is your starting point for all developer utilities.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}