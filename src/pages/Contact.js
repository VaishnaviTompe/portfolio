import React from 'react';
import './Contact.css'; // Import the CSS file for Contact styling

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <div className="underline1"></div>
      <div className="underline2"></div>
      <h3>Have You Any Questions?</h3>
      <p>I'm at your services</p>

      <div className="contact-info">
        <div className="contact-item">
        <i className="fas fa-phone"></i>
          <p>Call Us On</p>
          <p>+91 8308069316</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <p>Email</p>
          <p>tompevaishnavi89@gmail.com</p>
        </div>
        <div className="contact-item">
        <a href='https://www.linkedin.com/in/vaishnavitompe/' target='_blank'>
          <i className="fab fa-linkedin"></i>
          <p>LinkedIn</p>
          <p>Vaishnavi Tompe</p>
          </a>
        </div>
        <div className="contact-item">
        <a href='https://github.com/VaishnaviTompe' target='_blank'>
          <i className="fab fa-github"></i>
          <p>GitHub</p>
          <p>VaishnaviTompe</p>
          </a>
        </div>
      </div>

      <h3>Send Me an Email</h3>
      <p>I'm very responsive to messages</p>

      <form className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
        </div>
        <input type="text" className="pad-bot" placeholder="Phone Number" required />
        <input type="text" className="pad-bot" placeholder="Subject" required />
        <textarea placeholder="Message" className="pad-bot" rows="5" required></textarea>
        <button type="submit" className="send-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
