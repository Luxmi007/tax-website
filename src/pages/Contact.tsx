import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="contact-page" id="contact">
      <h1>Contact Us</h1>
      <p>
        <strong>
        We would love to hear from you! Please reach out with any questions or comments.
        </strong>
      </p>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Your Email"
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={4}
          placeholder="Your Message"
        />
        <button type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
