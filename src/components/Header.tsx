import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-background text-foreground p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.svg" // Ensure you have this logo file or change the src to your logo URL
            alt="Logo"
            width={40}
            height={40}
            className="dark:invert"
          />
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gray-600 dark:hover:text-gray-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-600 dark:hover:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
