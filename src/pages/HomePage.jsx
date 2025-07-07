import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center px-4 text-center">
      {/* Hero Section */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Welcome to Our Shop
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-8">
        Discover handpicked products just for you — curated with care and delivered with love.
      </p>

      {/* CTA */}
      <Link
        to="/shop"
        className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-lg font-medium shadow-md"
      >
        Shop Now
      </Link>

      {/* Optional Highlights */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        <div className="p-6 rounded-xl shadow hover:shadow-md transition bg-white">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Shipping</h3>
          <p className="text-gray-600 text-sm">We deliver within 2–4 days across the country.</p>
        </div>
        <div className="p-6 rounded-xl shadow hover:shadow-md transition bg-white">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Curated Products</h3>
          <p className="text-gray-600 text-sm">Only top-rated, reviewed items make it to our store.</p>
        </div>
        <div className="p-6 rounded-xl shadow hover:shadow-md transition bg-white">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
          <p className="text-gray-600 text-sm">We’re here anytime you need help or have a question.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
