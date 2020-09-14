import React from 'react';
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import contactBg from "../images/contactBcg.jpeg";


function ContactPage() {
    return (
        <div>
            <Hero img={contactBg}  title={"Contact Us"}/>
            <ContactForm />
        </div>
    )
}

export default ContactPage
