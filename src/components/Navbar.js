import React from 'react';
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import logo from "../images/logo.svg";

function Navbar() {
    return (
        <div>
            <ProductConsumer>
                {value => {
                    const { cartItems, handleSidebar, handleCart } = value;
                    return (
                        <NavWrapper>
                            <div className="nav-center">
                                <FaBars className="nav-icon" onClick={handleSidebar} />
                                <img src={logo} alt="logo" />
                                <div className="nav-cart">
                                    <FaCartPlus className="nav-icon" onClick={handleCart} />
                                    <div className="cart-items">
                                        {cartItems}
                                    </div>
                                </div>
                            </div>
                        </NavWrapper>
                    )
                }}
            </ProductConsumer>
        </div>
    )
}

const NavWrapper = styled.nav`
 position: -webkit-sticky;
 position: fixed;
 top: 0;
 width: 100%;
 z-index:1;
 padding: 1rem 1.5rem;
 background: var(--mainGrey);
 border-bottom: 3px solid var(--primaryColor);
.nav-center{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
}
.nav-cart{
    position: relative;
}
.nav-icon{
    font-size: 1.5rem;
    cursor: pointer;
}
.cart-items{
    position: absolute;
    background: var(--primaryColor);
    color: var(--mainWhite);
    top: -8px;
    font-size: 0.8rem;
    right: -8px;
    border-radius: 50%;
    padding: 0px 5px;
}

`;

export default Navbar
