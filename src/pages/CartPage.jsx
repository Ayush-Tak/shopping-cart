import {useOutletContext} from "react-router-dom";
import { Link } from "react-router-dom";

function CartPage(){
    const {cart, handleRemoveFromCart, handleUpdateQuantity} = useOutletContext();

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
          <div className="flex flex-col">
          <p className=" text-3xl font-semibold leading-normal text-gray-900 text-center ">Your Cart Is Empty 💔</p>
            <Link
              to="/shop"
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-lg font-medium shadow-md text-center"
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
                  <span>
                    {item.title} - ${item.price}
                  </span>
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
            <h2 className="text-xl font-bold mt-4 text-right">
              Total : ${calculateTotal()}
            </h2>
          </>
        )}
      </div>
    );
}

export default CartPage;