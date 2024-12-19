import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-description">
          Have questions or need assistance? We’re here to help! Reach out to us
          using the form below or via our contact details.
        </p>
        <form className="contact-form">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            placeholder="Your Name"
            required
          />

          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="Your Email"
            required
          />

          <label className="form-label" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            className="form-textarea"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
