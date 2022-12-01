import React from "react";

function About() {
    return (
        <div>
            <div className="card">
                <img src={require("../../assets/img/selfie.png")} className="card-img-top w-25 mx-auto my-5" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Joseph Hernandez</h5>
                        <p className="card-text">Hello there! I am a new developer working on improving my coding ability every day! I hope you enjoy my single page React portfolio!</p>
                    </div>
            </div>
        </div>
    )
}

export default About;