import ProductCard from "../components/ProductCard";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { handleAddToCart, handleAddToWishlist, wishlist } = useOutletContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
        </div>
      </div>
    );


  if (error)
    return (
      <>
        <div role="alert">
          <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Error
          </div>
          <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>{error}</p>
          </div>
        </div>
      </>
    );

  return (
    <div className="container mx-auto px-4">
      <div className="text-center py-12 bg-gray-50 rounded-lg my-8">
        <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight">
          Our Collection
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Discover a curated selection of products, hand-picked for quality and style.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
            handleAddToWishlist={handleAddToWishlist}
            wishlist={wishlist}
          />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
