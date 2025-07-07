import {useOutletContext} from "react-router-dom";

function WishListPage(){
    const {wishlist,handleMoveToCart,handleAddToWishlist} = useOutletContext();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
            {wishlist.length === 0 ? (
                <p>Your wishlist is empty</p>
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
