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
            <div className="head_text">
                TECHZAR 2023
            </div>
        </div>
    )
}

export default header;