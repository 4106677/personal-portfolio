import React from "react";
import "./about.css";
import AboutImg from "../../assets/profile.jpg";
import CV from "../../assets/YaroslavOliinyk.pdf";
import Info from "./Info";
import { ReactComponent as Files } from "../../assets/files.svg";
import { getAge } from "../../helpers/getAge";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="Developer" className="about__img" />

        <div className="about__data">
          <Info />
          <p className="about__description">
            Full-stack developer, I create web app with UI / UX user interface,
            I have {getAge()}+ years of experience and many clients are happy
            with the projects carried out.
          </p>
          <a download="" href={CV} className="button button--flex">
            Download CV
            <Files />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
