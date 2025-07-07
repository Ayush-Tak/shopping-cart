import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount, wishlistCount }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <svg
            className="w-8 h-8 text-gray-800"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h18M4 7h16M6 11h12M8 15h8M10 19h4"
            />
          </svg>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Right: Nav Links */}
        <ul
          className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6 text-gray-700 font-medium absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent px-6 md:px-0 py-4 md:py-0 shadow-md md:shadow-none z-20 transition-all duration-300 ${
            isOpen ? 'flex' : 'hidden md:flex'
          }`}
        >
          <li>
            <Link to="/" className="flex items-center hover:text-blue-500 transition">
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2h-2" />
              </svg>
              <span className="hidden md:inline">Home</span>
            </Link>
          </li>

          <li>
            <Link to="/shop" className="flex items-center hover:text-blue-500 transition">
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              <span className="hidden md:inline">Shop</span>
            </Link>
          </li>

          <li className="relative">
            <Link to="/cart" className="flex items-center hover:text-blue-500 transition">
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.3 5.5A1 1 0 007 20h10a1 1 0 001-1l1-4M7 13L5.4 7M16 21a1 1 0 100-2 1 1 0 000 2zm-8 0a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
              <span className="hidden md:inline">Cart</span>
              {cartCount > 0 && (
                <sup className="ml-1 text-blue-500 font-semibold text-xs">{cartCount}</sup>
              )}
            </Link>
          </li>

          <li className="relative">
            <Link to="/wishlist" className="flex items-center hover:text-pink-500 transition">
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.027l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="hidden md:inline">Wishlist</span>
              {wishlistCount > 0 && (
                <sup className="ml-1 text-pink-500 font-semibold text-xs">{wishlistCount}</sup>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
