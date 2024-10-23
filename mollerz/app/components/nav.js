import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to detect scroll and adjust navbar size
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Shrink navbar
      } else {
        setIsScrolled(false); // Return to normal size
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full bg-white shadow-lg fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-1' : 'py-6'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4 lg:px-6 xl:px-8">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center w-full md:w-auto md:pl-0 lg:relative lg:m-0 lg:h-full lg:px-0 lg:flex lg:justify-start">
          <img
            src="/moller3.png"
            alt="Moller's Logo"
            className={`transition-all duration-300 ${
              isScrolled ? 'w-24' : 'w-64'
            } h-auto shadow-lg`}
          />
        </div>

        {/* Nav Links for medium and larger screens */}
        <ul className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 font-semibold text-base lg:text-lg">
          <li>
            <Link href="/" className="text-black">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-black">
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-black">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-black">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/skills" className="text-black">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/contacts" className="text-black">
              Contacts
            </Link>
          </li>
        </ul>
      </div>

      {/* Centered Hamburger Menu for small screens */}
      <div className="flex justify-center mt-4 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu for small screens */}
      {isOpen && (
        <ul className="flex flex-col items-center space-y-2 mt-4 md:hidden">
          <li>
            <Link href="/" className="text-black block py-2">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-black block py-2">
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-black block py-2">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-black block py-2">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/skills" className="text-black block py-2">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/contacts" className="text-black block py-2">
              Contacts
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
