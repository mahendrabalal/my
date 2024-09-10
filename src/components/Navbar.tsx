// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-lg font-semibold text-gray-800">Mahendra Balal</Link>
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Home</Link>
              <Link href="/about" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">About</Link>
              <Link href="/projects" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Projects</Link>
              <Link href="/contact" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
