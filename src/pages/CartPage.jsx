import {useOutletContext} from "react-router-dom";

function CartPage(){
    const {cart} = useOutletContext();

    return(
        <div>
            <h1>Your Cart</h1>
            {cart.length ===0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((item,index)=> (
                        <li key={index}>{item.name} - ${item.price} Qty: {item.quantity}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CartPage;