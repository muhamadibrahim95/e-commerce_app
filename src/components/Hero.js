import React from 'react';
import styled from "styled-components";
import mainBg from "../images/mainBcg.jpeg";

function Hero({ img, title, max, children }) {
    return (
        <div>
            <HelloWrapper max={max} img={img}>
                <div className="banner">
                    <h1>{title}</h1>
                    {children}
                </div>

            </HelloWrapper>
        </div>
    )
}

const HelloWrapper = styled.div`
    text-align:center;
    justify-content:center;
    display:flex;
    align-items:center;
    min-height: ${props => (props.max ? "70vh" : "50vh")};
    color:var(--mainWhite);
    background:linear-gradient(var(--primaryRGBA),var(--primaryRGBA)),url(${props => props.img}) center/ cover no-repeat;
`;

Hero.defaultProps = {
    img: mainBg
}

export default Hero
