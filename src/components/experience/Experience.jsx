import React from "react";
import './experience.css';
import { BiLogoCss3, BiLogoJavascript, BiLogoPostgresql } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { FaJava, FaReact } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiMariadb } from "react-icons/si";

import {LiaNodeJs} from 'react-icons/lia';
import {DiMongodb} from 'react-icons/di';
import {SiJest, SiMysql} from 'react-icons/si';
import {BiLogoTypescript} from 'react-icons/bi';
import { TbBrandCypress } from 'react-icons/tb'
import { SiNestjs } from "react-icons/si";


const Experience = () => {
    return (
        <section id="experience">
            <h5>What skills I have</h5>
            <h2>My experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BiLogoTypescript className="experience__details-icon"/>
                            <div>
                                <h4>Typescript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BiLogoJavascript className="experience__details-icon"/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiNextdotjs  className="experience__details-icon"/>
                            <div>
                                <h4>Next.js</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaReact className="experience__details-icon"/>
                            <div>
                                <h4>React.js</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaJava className="experience__details-icon"/>
                            <div>
                                <h4>Java</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiFlutter  className="experience__details-icon"/>
                            <div>
                                <h4>Flutter</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <LiaNodeJs className="experience__details-icon"/>
                            <div>
                                <h4>Node.js</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiNestjs className="experience__details-icon"/>
                            <div>
                                <h4>Nest.js</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <DiMongodb className="experience__details-icon"/>
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiMysql className="experience__details-icon"/>
                            <div>
                                <h4>MySQL</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BiLogoPostgresql className="experience__details-icon"/>
                            <div>
                                <h4>PostgreSQL</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiMariadb  className="experience__details-icon"/>
                            <div>
                                <h4>MariaDB</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        
                    </div>
                </div>
                <div>
                    <h3>Testing development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <SiJest className="experience__details-icon"/>
                            <div>
                                <h4>Jest</h4>
                                <small className="text-light">React-Testing-Library / Supertest</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <TbBrandCypress className="experience__details-icon"/>
                            <div>
                                <h4>Cypress</h4>
                                <small className="text-light">End-to-End</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export {Experience};