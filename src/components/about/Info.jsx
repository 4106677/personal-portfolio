import React from "react";
import { getAge } from "../../helpers/getAge";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">{getAge()} + Years Working</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">12 + Projects</span>
      </div>

      <div className="about__box">
        <i className="bx bx-location-plus about__icon"></i>
        <h3 className="about__title">Location</h3>
        <span className="about__subtitle">Kyiv &#8660; Austin</span>
      </div>
    </div>
  );
};

export default Info;
