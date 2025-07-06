import {useOutletContext} from "react-router-dom";

function WishListPage(){
    const {wishlist} = useOutletContext();

    return (
        <div>
            <h1>Your Wishlist</h1>
            {wishlist.length === 0 ? (
                <p>Your wishlist is empty</p>
            ) : (
                <ul>
                    {wishlist.map((item, index) => (
                        <li key={index}>{item.name} - ${item.price}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default WishListPage;
