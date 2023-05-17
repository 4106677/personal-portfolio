import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ReactComponent as Send } from "../../assets/send.svg";

console.log(
  process.env,
  process.env.PUBLIC_KEY,
  process.env.REACT_APP_SERVICE_ID,
  process.env.REACT_APP_TEMPLATE_ID,
  process.env.REACT_APP_PUBLIC_KEY
);

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY
    );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact__form">
      <div className="contact__form-div">
        <label className="contact__form-tag">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Insert you name"
          className="contact__form-input"
        />
      </div>

      <div className="contact__form-div">
        <label className="contact__form-tag">Mail</label>
        <input
          type="email"
          name="email"
          placeholder="Insert you name"
          className="contact__form-input"
        />
      </div>

      <div className="contact__form-div contact__form-area">
        <label className="contact__form-tag">Project</label>
        <textarea
          name="project"
          cols="30"
          rows="10"
          contact__form-input
          className="contact__form-input"
          placeholder="Write you project"
        ></textarea>
      </div>

      <button className="button button--flex">
        Say Hello
        <Send />
      </button>
    </form>
  );
};

export default ContactForm;
