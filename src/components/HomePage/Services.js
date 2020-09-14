import React, { Component } from 'react';
import styled from "styled-components";
import {FaDolly, FaRedo, FaDollarSign} from "react-icons/fa";

export default class Services extends Component {

    state = {
        Services:[
            {
                id:1,
                icon:<FaDolly />,
                title:"Free shipping",
                des:"lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
            {
                id:2,
                icon:<FaRedo />,
                title:"30 days return policy",
                des:"lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
            {
                id:1,
                icon:<FaDollarSign />,
                title:"Secured payment",
                des:"lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            }

        ]
    }

    render() {
        return (
            <ServiceWrapper>
               <div className="container">
                   <div className="row">
                    {this.state.Services.map(item => {
                        return(
                            <div className="col-md-4 col-sm-6 mx-auto text-center my-3" key={item.id}>
                                <div className="service-icon">
                                    {item.icon}
                                </div>
                                <div className="mt-3 text-capitalize">
                                    {item.title}
                                </div>
                                <div className="mt-3">
                                    {item.des}
                                </div>
                            </div>
                        )
                       
                    })}
                   </div>

               </div>
            </ServiceWrapper>
                
            
        )
    }
}

const ServiceWrapper = styled.div`
    background: rgba(95, 183, 234, 0.5);
    padding-top:10px;
    padding-bottom:20px;
    .service-icon{
        font-size:2.5rem;
        color:var(--primaryColor);
    }
    p{
        color:var(--darkGrey);
    }
`;

