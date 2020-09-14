
import React from 'react';
import Info from "../components/Info";
import Hero from "../components/Hero";
import aboutBcg from "../images/aboutBcg.jpeg";

function AboutPage() {
    return (
        <div>
           <Hero img={aboutBcg} />
             
           <Info />
        </div>
    )
}

export default AboutPage
