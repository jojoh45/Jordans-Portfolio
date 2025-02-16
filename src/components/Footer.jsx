import React from 'react';
import FadeUp from './FadeUp';
import "../styles/Footer.css";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <FadeUp delay={.5}>
            <div className="footer">
                <div className="footer-content">
                    <div>Built by Jordan Johnson</div>
                    <div>Copyright ⓒ {year} All rights resereved. </div>
                </div>
            </div>
        </FadeUp>
    )
};

export default Footer;