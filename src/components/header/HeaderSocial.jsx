import React from "react";
import {AiFillLinkedin} from 'react-icons/ai';
import { AiOutlineGithub } from "react-icons/ai";

const HeaderSocial = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/jhair-agila-b8ba45237/" target="_blank"> <AiFillLinkedin/> </a>
            <a href="https://github.com/JhairAgila" target="_blank"> <AiOutlineGithub/> </a>
            <a href="https://github.com/JhairDeveloper" target="_blank"> <AiOutlineGithub/> </a>
        </div>
    );
}

export {HeaderSocial}