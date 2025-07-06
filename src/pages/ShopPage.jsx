import ProductCard from "../components/ProductCard";
import { useOutletContext } from "react-router-dom";

function ShopPage(){
    const { handleAddToCart, handleAddToWishlist } = useOutletContext();

    const products = [
        { id: 1, name: "Product 1", price: 10 },
        { id: 2, name: "Product 2", price: 20 },
        { id: 3, name: "Product 3", price: 30 },
    ];

    return (
        <div>
            <h1>Products</h1>
            <div className="flex flex-wrap justify-center">
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        handleAddToCart={handleAddToCart} 
                        handleAddToWishlist={handleAddToWishlist} 
                    />
                ))}
            </div>
        </div>
    );
}

export default ShopPage;