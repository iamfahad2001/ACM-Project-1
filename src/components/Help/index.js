import React from "react";

const Help = () => {
    return (
        <>
            <section style={{backgroundColor: "#FFFFFF"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 style={{textAlign:"center", fontSize:"55px"}}>We Helped More Than 1000 Companies</h2>
                        </div>
                        <img src={require('../../images/comp.PNG')} style={{marginLeft:"210px"}}/>
                    </div>
                </div>
            </section>
        </>
)
}
export default Help;