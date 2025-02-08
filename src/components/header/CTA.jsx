import React from "react";
import CV from '../../assets/CV-JhairAgila-English.pdf'
const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn" data-test-id="CV">Download CV </a>
            <a href="#contact" className="btn btn-primary"> Let's talk </a>
        </div>
    );
}   
export {CTA}