import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

function WishListPage() {
  const { wishlist, handleMoveToCart, handleAddToWishlist } =
    useOutletContext();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <>
          <div className="flex flex-col justify-center items-center h-96 gap-4">
            <p className="text-3xl font-semibold text-gray-800">
              Your Wishlist Is Empty 💔
            </p>
            <p className="text-xl text-gray-600">
              Go fill it up with things you love! 🎊
            </p>
            <Link
              to="/shop"
              className="mt-4 px-8 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition text-lg font-medium shadow-md"
            >
              Shop Now
            </Link>
          </div>
        </>
      ) : (
        <ul>
          {wishlist.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b py-2"
            >
              <div className="bg-gray-100 rounded p-1 m-0">
                <img
                  src={item.image}
                  alt={item.title} // Use title for alt text
                  className="w-20 h-20 object-contain mr-3 ml-3 rounded"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-500">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleMoveToCart(item)}
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-700"
                >
                  Move To Cart
                </button>
                <button
                  onClick={() => handleAddToWishlist(item)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WishListPage;
