function ProductCard({product, handleAddToCart, handleAddToWishlist}){
    return(
        <div>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            <button onClick={() => handleAddToWishlist(product)}>Add to Wishlist</button>
        </div>
    );
};

export default ProductCard;