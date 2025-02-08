import React from "react";
import './header.css';
import { CTA } from "./CTA";
import FreshAirProfile from '../../assets/me-cutted2.png';
import { HeaderSocial } from "./HeaderSocial";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Jhair Agila</h1>
                <h5 className="text-light">
                    Full Stack Developer
                </h5>
                <CTA/>
                <HeaderSocial/>
                <div className="me">
                    {/* <img src={ME} alt="me" /> */}
                    <img src={FreshAirProfile} alt="me" />
                </div>
                <a href="#contact" className="scroll_down"> Scroll Down </a>
            </div>
        </header>
    );
}

export {Header}