import React from "react";
import "./about.css";
import GITHUB from "../../assets/github.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiTwotoneFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <article className="about__me-image">
            <img src={GITHUB} className="img" alt="About" />
          </article>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Years Coding</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>1</small>
            </article>
            <article className="about__card">
              <AiTwotoneFolderOpen className="about__icon"/>
              <h5>Projects</h5>
              <small>+11 Completed</small>
            </article>
          </div>

          <p>
            I'm Jhair Agila, a guy passionate about software development, with a great versatility which has allowed me to adapt to various work environments.
          </p>
          <a href="#contact" className="btn btn-primary" >Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export { About };
