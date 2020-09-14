import React from 'react'

function ContactForm() {
    return (
        <div>
            <section className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <h2 className="mt-4">Contact Us</h2>
                            <div className="title-underline"></div>
                            <form className="mt-3" action="https://formspree.io/prowebicibrahim@gmail.com" method="POST">
                                <div className="form-group">
                                    <input type="text" name="name"
                                        className="form-control" placeholder="Enter your name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email"
                                        className="form-control" placeholder="Enter your email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="subject"
                                        className="form-control" placeholder="Enter the subject" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message"
                                        placeholder="Enter your message"></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="form-control bg-primary text-white" value="Send" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactForm
