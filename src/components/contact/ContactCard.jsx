import React from "react";

const ContactCard = () => {
  return (
    <>
      <div className="contact__card">
        <i className="bx bx-mail-send contact__card-icon"></i>

        <h3 className="contact__card-title">Email</h3>
        <span className="contact__card-data">4106677@gmail.com</span>

        <a
          href="mailto:4106677@gmail.com"
          className="contact__button"
          target="_blanc"
        >
          Write me
          <i className="bx bx-right-arrow-alt contact__button-icon"></i>
        </a>
      </div>

      <div className="contact__card">
        <i className="bx bxl-telegram contact__card-icon"></i>

        <h3 className="contact__card-title">Telegram</h3>
        <span className="contact__card-data">@YO4106677</span>

        <a
          href="https://t.me/YO4106677"
          className="contact__button"
          target="_blanc"
        >
          Write me
          <i className="bx bx-right-arrow-alt contact__button-icon"></i>
        </a>
      </div>

      <div className="contact__card">
        <i className="bx bxs-phone contact__card-icon"></i>

        <h3 className="contact__card-title">Phone</h3>
        <span className="contact__card-data">+38 (063) 410-66-77</span>

        <a href="tel:+380634106677" className="contact__button" target="_blanc">
          Write me
          <i className="bx bx-right-arrow-alt contact__button-icon"></i>
        </a>
      </div>
    </>
  );
};

export default ContactCard;
