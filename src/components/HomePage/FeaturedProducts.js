import React from 'react';
import Product from "../Product";
import {Link} from "react-router-dom";
import {ProductConsumer} from "../../context";

function FeaturedProducts() {
    return (
        <div>
            <div className="container">
                <div className="row">
                  <ProductConsumer>
                      {value => {
                          const {featuredProducts} = value;

                          return(
                            featuredProducts.map(product => (
                               <Product key={product.id} product={product}></Product> 
                            ))
                          )
                      }}
                  </ProductConsumer>
                </div>
                <div className="row my-5">
                    <div className="col text-center">
                      <Link to="/products"  className="main-link">Our Products</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FeaturedProducts
