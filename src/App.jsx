import './App.css'
import {Outlet} from 'react-router-dom'
import {useState} from 'react';

import Navbar from './components/Navbar'

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

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



  return (
    <>
      <Navbar cartCount = {cart.length} wishlistCount = {wishlist.length}/>
    <main>
      <Outlet context ={{  cart, wishlist, handleAddToCart, handleAddToWishlist }}/>
    </main>
    </>
  )
}

export default App
