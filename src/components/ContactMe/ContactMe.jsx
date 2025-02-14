import React from "react";
import { Element } from "react-scroll";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <Element id="contact" className="contact-section">
      <div className="content-width">
        <h2 className="contact-title">Contact Me</h2>

        <div className="contact-content flex-element">
          <div className="contact-info">
            <p className="contact-text">📞 +91 9087593297</p>
            <p className="contact-text">📍 Vadakuthu, Cuddalore, Tamilnadu</p>
            <a className="contact-text" href="mailto:ragayathri97@gmail.com">
            📧 ragayathri97@gmail.com</a>
          </div>

            <div className="form-content">
          <p className="contact-highlight">Feel Free To Contact</p>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Name" className="form-input" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" className="form-input" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" className="form-input" />
            </div>
            <div className="form-group">
              <textarea placeholder="Message" rows="4" className="form-textarea"></textarea>
            </div>
            <button className="form-button">Send Message</button>
          </form>
        </div>
        </div>
      </div>
    </Element>
  );
};

export default ContactMe;
