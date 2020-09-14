import React from 'react';
import styled from "styled-components";
import {ProductConsumer} from "../context";

function Footer() {
    return (
        <ProductConsumer>
            {value => {
                const {socialLinks} = value;
                return(
                    <FooterWrapper>
                      <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                               <p className="text-capitalize font-13">
                                   Copyright &copy; tech store {new Date().getFullYear()} all rights reserved
                               </p>
                            </div>
                            <div className="col-md-6 d-flex justify-content-around">
                              {value.socialIcons.map(item =>
                                <a href={item.url} key={item.id}>{item.icon}</a>
                              )}
                            </div>
                        </div>
                      </div>
                    </FooterWrapper>
                )
            }}
        </ProductConsumer>
    )
}

const FooterWrapper = styled.div`
    background: var(--darkGrey);
    color: var(--mainWhite);
    padding-top: 15px;
.icon{
    color:var(--mainWhite);
    font-size:1.5rem;
}
.icon:hover{
    color:var(--primaryColor);
}
.font-13{
    font-size:13px;
}
`;

export default Footer
