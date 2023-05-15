import React, { useState } from "react";
import "./qualification.css";
import Education from "./Education";
import Experience from "./Experience";

const Qualification = () => {
  const [toggler, setToggler] = useState(1);

  const toggleTab = (index) => {
    setToggler(index);
  };

  return (
    <section className="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggler === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggler === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          {toggler === 1 ? <Education /> : <Experience />}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
