import React from "react";
import './Email.css';

const Email = () => {
    return (
        <>
            <section style={{backgroundColor: "#1C55C9", height: "400px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 style={{
                                textAlign: "center",
                                fontSize: "55px",
                                color: "#FFFFFF",
                                paddingTop: "100px"
                            }}>Join us on email for <br/>
                                <span style={{color: "#000000"}}>more information</span></h2>

                            <div className="btn-main">

                                <a className="btn btn-white">Join Now</a>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Email;