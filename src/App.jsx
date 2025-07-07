
import {Outlet} from 'react-router-dom'
import {useState} from 'react';

import Navbar from './components/Navbar'
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Handling add to cart 
  const handleAddToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id)

    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id
        ? {...item, quantity : item.quantity + 1}
        : item
      ));
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
    console.log('Product added to cart:', product);
    console.log('Current cart:', cart);
  };

  // Handling add to wishlist
  const handleAddToWishlist = (product)=>{
    const isWishlisted = wishlist.find(item => item.id === product.id)

    if (isWishlisted){
      setWishlist(wishlist.filter(item => item.id !== product.id));
      console.log("Product removed:",product);
    }
    else {
      setWishlist([...wishlist, product]);
      console.log("Product added to wishlist",product);
    }
  }

  // Handling removing from cart

  const handleRemoveFromCart = (productID) => {
    setCart(cart.filter(item => item.id !== productID))
  };

  // handling updating product qty in cart

  const handleUpdateQuantity = (productID, newQuantity) => {
    if (newQuantity <= 0 ){
      handleRemoveFromCart(productID);
    } else {
      setCart(cart.map(item =>
        item.id === productID
        ? {...item, quantity:newQuantity}
        : item
      ));
    }
  };

  // handling moving to cart from wishlist

  const handleMoveToCart = (product) => {
    handleAddToCart(product);
    handleAddToWishlist(product);
  }

  // handling checkout

  const handleCheckout = () => {
    if (cart.length >0) {
      alert("Thank You for your purchase, you fake order won't be on the way");
      setCart([]);
    }
  };

  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Navbar cartCount = {cart.length} wishlistCount = {wishlist.length}/>
    <main className='flex-grow'>
      <Outlet context ={{
          cart,
          wishlist,
          handleAddToCart,
          handleAddToWishlist,
          handleRemoveFromCart,
          handleUpdateQuantity,
          handleMoveToCart,
          handleCheckout
           }}/>
    </main>
    <Footer />
    </div>
    </>
  );
}

export default App
