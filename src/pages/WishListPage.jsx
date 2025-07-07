import {useOutletContext} from "react-router-dom";
import { Link } from "react-router-dom";

function WishListPage(){
    const {wishlist,handleMoveToCart,handleAddToWishlist} = useOutletContext();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
            {wishlist.length === 0 ? (
                <>
          <div className="flex flex-col">
          <p className=" text-3xl font-semibold leading-normal text-gray-900 text-center ">Your Wishlist Is Empty 💔</p>
          <p className="text-2xl font-stretch-ultra-expanded leading-normal text-gray-700 text-center">Go fill it up 🎊</p>
            <Link
              to="/shop"
              className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition text-lg font-medium shadow-md text-center"
            >
              Shop Now
            </Link>
            </div>
          </>
            ) : (
                <ul>
                    {wishlist.map((item) => (
                        <li key={item.id} className="flex justify-between items-center border-b py-2">
                            <span>{item.title}- ${item.price}</span>
                            <div className="flex items-center">
                                <button onClick={()=> handleMoveToCart(item)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-700">
                                        Move To Cart
                                </button>
                                <button
                                onClick={()=> handleAddToWishlist(item)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">
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
