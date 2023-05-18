import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Yaroslav O.</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="http://www.linkedin.com/in/JOn4106677"
            className="footer__social-link"
            target="_blanc"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/4106677"
            className="footer__social-link"
            target="_blanc"
          >
            <i className="uil uil-github-alt"></i>
          </a>
          <a
            href="https://t.me/YO4106677"
            className="footer__social-link"
            target="_blanc"
          >
            <i className="uil uil-telegram-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Yaroslav Oliinyk. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
