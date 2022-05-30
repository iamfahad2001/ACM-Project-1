import React from "react";

import './style.css';

const Banner = () => {
    return (

        <>
            {/*banner start*/}
            <section className="banner-section">
                <div className="container">
                    <div className="row align-items-lg-center">
                        <div className="col-md-6">
                            <div className="banner-text">
                                <h1>CYBER SECURITY</h1>
                                <p>is much more than a matter of information technology</p>
                                <div className="Banner-btn-main">
                                    <a className="btn btn-blue">Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="banner-img">
                                <img src={require('../../images/cs.png')} alt="banner img"
                                     />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*banner end*/}

        </>
    )
}

export default Banner;