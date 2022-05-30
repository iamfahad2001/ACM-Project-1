import React from "react";
import './Card.css'

const Card = () => {
    return (
        <>
            <section className="Card-main">
                <div className="Container">
                    <div className="B-text">
                        <h1> Get your best deal</h1>
                    </div>
                    <div className="row">
                        <div className="column">
                            <div className="Card1">
                                <h3 className="Card1-h3">Personal</h3>
                                <p style={{paddingLeft: "10px", fontSize: "15px"}}>Special first packet for all</p>
                                <div className="Bdr"></div>
                                <h1 style={{paddingLeft: "10px"}}>$8<span style={{fontSize: "10px"}}>/Month</span></h1>
                                <ul>
                                    <li>Up to 5 page each group</li>
                                    <li>Up to 10 group page</li>
                                    <li>5 Days group page saved</li>
                                </ul>
                                <div className="Card-btn-main">
                                    <a className="btn btn-Card">Start Free Trial</a>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="Card2">
                                <h3 className="Card2-h3">Regular</h3>
                                <p style={{paddingLeft: "10px", fontSize: "15px"}}>Recommended for personal pro</p>
                                <div className="Bdr2"></div>
                                <h1 style={{paddingLeft: "10px"}}>$20<span style={{fontSize: "10px"}}>/Month</span></h1>
                                <ul>
                                    <li>Up to 5 page each group</li>
                                    <li>Up to 10 group page</li>
                                    <li>15 Days group page saved</li>
                                    <li>Download page up to 20 page</li>
                                </ul>
                                <div className="Card2-btn-main">
                                    <a className="btn btn-Card2">Start Free Trial</a>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="Card3">
                                <h3 className="Card3-h3">Premium</h3>
                                <p style={{paddingLeft: "10px", fontSize: "15px"}}>Packet for Startup & Company</p>
                                <div className="Bdr3"></div>
                                <h1 style={{paddingLeft: "10px"}}>$48<span style={{fontSize: "10px"}}>/Month</span></h1>
                                <ul>
                                    <li>Unlimited group pages</li>
                                    <li>Unlimited download page</li>
                                    <li>Unlimited page each group</li>
                                    <li>Customize sorting group pages</li>
                                    <li>Customize group page name</li>
                                    <li>30 Days group page saved</li>
                                </ul>
                                <div className="Card3-btn-main">
                                    <a className="btn btn-Card3">Start Free Trial</a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}
export default Card;