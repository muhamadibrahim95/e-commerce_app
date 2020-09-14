import React from 'react';
import aboutBg from "../images/aboutBcg.jpeg";

function Info() {
    return (
        <div>
            <section className="info">
                <div className="container">
                    <div className="row img-about">
                        <div className="col-md-6 mx-auto">
                            <img src={aboutBg} className="img-thumbnail" alt="info" />
                        </div>
                        <div className="col-md-6 mx-auto">
                            <h2>About Us</h2>
                            <div className="title-underline"></div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Info
