import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpeg";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.png";
import IMGFITNESSAPP from "../../assets/FitnessApp.png";

// DATA USED FOR PRESENT PROYECTS

const data = [
  {
    id: 7,
    image: IMGFITNESSAPP,
    title: "Fitness application",
    github: "https://github.com/JhairAgila/FitnessAplicatiion-Ts.git",
    demo: "https://fitnessaplicatiion-ts.pages.dev/",
    tecnologies: 'Typescript, React, Tailwind CSS',
  },
  {
    id: 1,
    image: IMG1,
    title: "Calculate shortest paht",
    github: "https://github.com/JhairAgila/Purchasing-System",
    demo: "https://lnkd.in/e44XgXNb",
    youtube: 'https://www.youtube.com/watch?v=QP4wrmEfuHo',
    tecnologies: 'HTML, CSS (Native-Base, Chackra-UI), React.js, React-Native, Node.js, MongoDB'
  },
  {
    id: 2,
    image: IMG2,
    title: "Online clothing store",
    github: "https://github.com/JhairAgila/Purchasing-System",
    demo: "",
    youtube: 'https://youtu.be/IoxUaD40SoU',
    tecnologies: 'HTML, CSS(Styled-Components), React.js, Node.js, MongoDB',
  },
  {
    id: 3,
    image: IMG3,
    title: "Todo app",
    github: "https://github.com/JhairAgila/Todo-App",
    demo: "",
    youtube: 'https://youtu.be/dJ05yeghIoo',
    tecnologies: 'HTML, CSS, React.js',
  },
  {
    id: 4,
    image: IMG4,
    title: "Staff administration",
    github:
      "https://github.com/JorgeDanielOrtega/Administracion-de-Empleados.github.io",
    demo: "",
    youtube: 'https://www.youtube.com/watch?v=TrMmfgdZGTc',
    tecnologies: 'Java con persistencia de datos local',
  },
  {
    id: 5,
    image: IMG5,
    title: "Student administration system",
    github: "https://github.com/Marylin-Alvarado/Sistema-de-Cursos",
    demo: "",
    youtube: '',
    tecnologies: 'HTML, CSS, Java, Vue',
  },
  {
    id: 6,
    image: IMG6,
    title: "Billing system",
    github: "https://github.com/JhairAgila/BillingSystem",
    youtube: 'https://www.youtube.com/watch?v=gXfZRjnRWP8',
    tecnologies: 'Java, PostgreSQL, Hibernate',
  }
];

const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <h5>My recent work</h5>
        <h2>Portafolio</h2>
        <div className="container portfolio__container">
          {data.map(({ id, image, title, github, demo, youtube, tecnologies }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{tecnologies}</p>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">
                    GitHub
                  </a>
                  {demo ? <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Live Demo
                  </a>:''}
                  {youtube ? <a
                    href={youtube}
                    className="btn"
                    target="_blank"
                  >
                    Video
                  </a> : ''}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export { Portfolio };
