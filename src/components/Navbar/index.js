import React from 'react';
import './Nav.css';

const Navbar = () => {
    return (
        <>

            <div className="Top-nav">
                <img src={require('../../images/logo.PNG')} style={{height:"50px",paddingTop:"5px"}}/>
                <a style={{
                    backgroundColor: "#fff",
                    color: "#000000",
                    border: "1px solid #fff",
                    borderRadius: "10px"
                }}>Register</a>
                <a>Login</a>
                <a href="#">Solution</a>
                <a href="#">Pricing</a>
                <a>How It Work</a>
                <a>About</a>





            </div>

        </>
    );
};

export default Navbar;
