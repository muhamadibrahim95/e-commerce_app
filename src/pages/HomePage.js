import React from 'react';
import Hero from "../components/Hero";
import {Link} from "react-router-dom";
import Services from "../components/HomePage/Services";
import FeaturedProducts from "../components/HomePage/FeaturedProducts";

function HomePage() {
    return (
        <div>
           <Hero title="Awesome Gadgets" max={true}>
               <Link to="/products" className="main-link" style={{marginTop:"20px"}}>Our Products</Link>
           </Hero>
           <Services />
           <FeaturedProducts />
        </div>
    )
}

export default HomePage
