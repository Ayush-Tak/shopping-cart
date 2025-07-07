import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart, handleRemoveFromCart, handleUpdateQuantity, handleCheckout } =
    useOutletContext();

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <>
          <div className="flex flex-col justify-center items-center h-96 gap-6">
            <p className="text-3xl font-semibold text-gray-800">
              Your Cart Is Empty 💔
            </p>
            <Link
              to="/shop"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-lg font-medium shadow-md"
            >
              Shop Now
            </Link>
          </div>
        </>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
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
                    onClick={() =>
                      handleUpdateQuantity(item.id, item.quantity - 1)
                    }
                    className="bg-gray-300 px-2 rounded-l"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleUpdateQuantity(item.id, item.quantity + 1)
                    }
                    className="bg-gray-300 px-2 rounded-r"
                  >
                    +
                  </button>
                  <div className="w-24 text-right ml-6">
                    <p className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded ml-4"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-right">
            <h2 className="text-2xl font-bold">Total: ${calculateTotal()}</h2>
            <button
              onClick={handleCheckout}
              className="mt-4 px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition text-lg font-medium shadow-md"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
