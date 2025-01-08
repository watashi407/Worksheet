import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Activities</h1>

      <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
        <Link
          href="/ac1"
          className="block bg-blue-500 text-white text-center py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Activity 1
        </Link>
        <Link
          href="/ac2"
          className="block bg-blue-500 text-white text-center py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Activity 2
        </Link>
        <Link
          href="/ac3"
          className="block bg-blue-500 text-white text-center py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Activity 3
        </Link>
        <Link
          href="/ac4"
          className="block bg-blue-500 text-white text-center py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Activity 4
        </Link>
        <Link
          href="/ac5"
          className="block bg-blue-500 text-white text-center py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Activity 5
        </Link>
        <Link
          href="/ac6"
          className="block bg-blue-500 text-white text-center py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Activity 6
        </Link>
        <Link
          href="/ac8"
          className="block bg-blue-500 text-white text-center py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Activity 8
        </Link>
      </div>
    </main>
  );
}
