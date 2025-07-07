function ProductCard({product, handleAddToCart, handleAddToWishlist,wishlist}){
    const isWishlisted = wishlist.find(item=> item.id === product.id);
    return (
      <div className="border rounded-lg p-4 m-2 w-64 text-center shadow-lg flex flex-col justify-between">
        <div>
          <img
            src={product.image}
            alt={product.title} // Use title for alt text
            className="w-full h-40 object-contain mb-4 rounded"
          />
          <h2 className="text-xl font-bold mb-2 h-16 truncate" >{product.title}</h2>
          <p className="mb-4">${product.price}</p>
        </div>
        <div className="flex justify-around items-center">
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-3/4"
          >
            Add to Cart
          </button>
          <button
            onClick={() => handleAddToWishlist(product)}
            className="p-2 rounded-full hover:bg-gray-200"
          >
            {/* Conditional heart icon */}
            {isWishlisted ? (
              <span className="text-red-500 text-2xl">♥</span> // Filled heart
            ) : (
              <span className="text-gray-500 text-2xl">♡</span> // Empty heart
            )}
          </button>
        </div>
      </div>
    );
};

export default ProductCard;