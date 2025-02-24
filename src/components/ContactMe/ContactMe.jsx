import React, { useState } from "react";
import { Element } from "react-scroll";
import emailjs from "emailjs-com";
import "./ContactMe.css";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_sll03l7", // service ID
        "template_nmcjl8h", //template ID
        formData,
        "0GfCGgBt3tAiezY7u" //public key
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Element id="contact" className="contact-section">
      <div className="content-width">
        <h2 className="contact-title">Contact Me</h2>
        <div className="contact-content flex-element">
          <div className="contact-info">
            <p className="contact-text">📞 +91 9087593297</p>
            <p className="contact-text">📍 Vadakuthu, Cuddalore, Tamilnadu</p>
            <a className="contact-text" href="mailto:ragayathri97@gmail.com">
              📧 ragayathri97@gmail.com
            </a>
          </div>
          <div className="form-content">
            <p className="contact-highlight">Feel Free To Contact</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="form-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default ContactMe;
