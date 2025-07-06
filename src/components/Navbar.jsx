import {Link} from 'react-router-dom';

function Navbar({cartCount, wishlistCount}) {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/cart">Cart ({cartCount})</Link>
                </li>
                <li>
                    <Link to="/wishlist">Wishlist ({wishlistCount})</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;