import React from "react";
import {AiFillLinkedin} from 'react-icons/ai';
import { AiOutlineGithub } from "react-icons/ai";

const HeaderSocial = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/jhair-agila-b8ba45237/" data-testid="linkedin" target="_blank"> <AiFillLinkedin/> </a>
            <a href="https://github.com/JhairAgila" target="_blank" data-testid="githubPersonal"> <AiOutlineGithub/> </a>
            <a href="https://github.com/JhairDeveloper" target="_blank" data-testid="githubInstitutional"> <AiOutlineGithub/> </a>
        </div>
    );
}

export {HeaderSocial}