import React from 'react';
import './Social.css'
const Social = () => {

    return(
        <>
            <section style={{backgroundColor: "#FAFAFA", height:"500px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 style={{textAlign:"center", fontSize:"55px"}}>Social Media Links</h2>
                            <p style={{textAlign:"center", fontSize:"30px"}}>Feel Free To Contact Us</p>
                        </div>
                        <img src={require('../../images/Capture.PNG')} style={{marginLeft:"85px"}}/>

                        <div  className="Social-btn" style={{marginLeft:"530px", marginTop:"63px"}}>

                            <a  className="btn btn-social" >Get Started</a>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Social;