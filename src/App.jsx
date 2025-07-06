import './App.css'
import {Outlet} from 'react-router-dom'
import {useState} from 'react';

import Navbar from './components/Navbar'

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log('Product added to cart:', product);
  };

  const handleAddToWishlist = (product)=>{
    setWishlist([...wishlist, product]);
    console.log('Product added to wishlist:', product);
  };



  return (
    <>
      <Navbar cartCount = {cart.length} wishlistCount = {wishlist.length}/>
    <main>
      <Outlet context ={{  handleAddToCart, handleAddToWishlist }}/>
    </main>
    </>
  )
}

export default App
