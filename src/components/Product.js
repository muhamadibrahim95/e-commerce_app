import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {ProductConsumer} from "../context";
import { FaSearchPlus, FaCartPlus } from 'react-icons/fa';


function Product({ product }) {
    return (
        <ProductConsumer>
            {value => {
                const {addToCart, setSingleProduct} = value;
                return(
                   <ProductWrapper className="col-md-4 col-sm-6">
                       <div className="card">
                          <div className="img-container">
                            <img src={product.image} className="card-img-top p-5"
                             alt="product image" style= {{height:"320px"}}/>
                             <div className="product-icons">
                                <Link to={`products/${product.id}`} onClick={() =>
                                setSingleProduct(product.id)}>
                                  <FaSearchPlus className="icon" />
                                </Link>
                                <FaCartPlus className="icon" onClick={() => addToCart(product.id)}/>
                             </div>
                          </div>
                          <div className="card-body d-flex justify-content-between">
                                <p className="mb-0">{product.title}</p>
                                <p className="mb-0 text-main">{product.price}</p>
                          </div>
                        
                       </div>
                   </ProductWrapper> 
                )
            }}
        </ProductConsumer>
    )
}

const ProductWrapper = styled.div`
margin-top:3rem;
.card {
    box-shadow: 3px 3px 5px 1px rgba(163,151,163,1);
   /* transition: var(--mainTransition); */
    height:100%;
}
.card:hover{
    box-shadow: 5px 5px 5px 1px rgba(163,151,163,2);
    cursor:pointer;
}
.card-img-top{
    transition:var(--mainTransition);
}
.card:hover .card-img-top{
    transform:scale(1.05);
    opacity:0.2
}
.img-container{
    position:relative;
}
.product-icons{
    transition:var(--mainTransition);
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    opacity:0;
}
.icon{
    font-size:2.5rem;
    margin:1rem;
    padding:0.5rem;
    color:var(--primaryColor);
    background:var(--mainBlack);
    border-radius:0.5rem;
}
.card:hover .product-icons{
    opacity:1;
}
.card-body{
    text-transform:capitalize;
}

`;

export default Product
