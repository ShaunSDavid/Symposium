import React from "react";
import './footer.css';

const Footer = () => {
    return (
            <footer className="footer">
                <div className="left-foot">
                <p>© 2023Technofest</p>
                </div>
                <nav className="foot-nav">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                </nav>
            </footer>
    );
}

export default Footer;