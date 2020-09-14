import React from 'react';
import Products from "../components/ProductsPage/Products";
import Hero from "../components/Hero";
import productsBg from "../images/productsBcg.jpeg";

function ProductsPage() {
    return (
        <div>
            <Hero img={productsBg} />
            <Products />
        </div>
    )
}

export default ProductsPage
