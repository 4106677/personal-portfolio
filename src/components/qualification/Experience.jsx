import { nanoid } from "nanoid";
import React from "react";

const journeyData = [
  {
    name: "Project Manager",
    period: "2017 - 2022",
    place: "Furniture company 'MIRT'",
  },
  {
    name: "Managing Partner",
    period: "2017",
    place: "Everest Education",
  },
  {
    name: "MASS business manager",
    period: "2014 - 2017",
    place: "Alfa Bank Ukraine",
  },
];

const indexChecker = (checkName) => {
  return journeyData.findIndex((i) => i.name === checkName);
};

const Experience = () => {
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

export default Experience;
