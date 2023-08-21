import React from "react";
import './head.css';
import image from "./licet-logo.png";

const header = () => {
    return (
        <div>
            <div className="head_cont">
                <img className="head_img" src={image} alt="Licet-logo" />
            </div>
            <div className="line"></div>
            <header className="head_text">
                <h1>TechnoFest 2023</h1>
            </header>
        </div>
    )
}

export default header;