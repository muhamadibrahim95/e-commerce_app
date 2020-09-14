import React from 'react';
import Hero from "../components/Hero";
import cartBg from "../images/storeBcg.jpeg";
import CartSection from "../components/CartPage";

function CartPage() {
    return (
        <div>
            <Hero img={cartBg}/>
            <CartSection />
        </div>
    )
}

export default CartPage
