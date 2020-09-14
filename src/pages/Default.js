import React from 'react';
import Hero from "../components/Hero";
import defaultBg from "../images/defaultBcg.jpeg";
import {Link} from "react-router-dom";

function Default() {
    return (
        <div>
            <Hero img={defaultBg} title={404} max={true}>
                <h2 className="text-uppercase">page not found</h2>
                <Link to="/" className="main-link" style={{marginTop:"20px"}}>Return Home</Link>
            </Hero>
        </div>
    )
}

export default Default
