import ProductCard from "./ProductCard";

function ShopPage(){
    const products = [
        { id: 1, name: "Product 1", price: 10 },
        { id: 2, name: "Product 2", price: 20 },
        { id: 3, name: "Product 3", price: 30 },
    ];

    return (
        <div>
            <h1>Products</h1>
            {products.map((product)=>{
                return <ProductCard key={product.id} product={product} />
            })}
        </div>
    );
}

export default ShopPage;