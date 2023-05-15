import { nanoid } from "nanoid";
import React from "react";

const journeyData = [
  {
    name: "Full Stack Developer",
    period: "2022 - 2023",
    place: "IT SCHOOL GOIT",
  },
  {
    name: "Project Management",
    period: "2020 - 2021",
    place: "DTEK Business Academy",
  },
  {
    name: "Financical",
    period: "2018 - 2013",
    place: "Donetsk National University",
  },
];

const indexChecker = (checkName) => {
  return journeyData.findIndex((i) => i.name === checkName);
};

const Education = () => {
  return (
    <div className="qualification__content qualification__content-active">
      {journeyData.map(({ name, period, place }) => (
        <div className="qualification__data" key={nanoid()}>
          {indexChecker(name) % 2 !== 0 ? (
            <>
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">{name}</h3>
                <span className="qualification__subtitle">{place}</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  &nbsp;{period}
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <h3 className="qualification__title">{name}</h3>
                <span className="qualification__subtitle">{place}</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  &nbsp;{period}
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Education;
