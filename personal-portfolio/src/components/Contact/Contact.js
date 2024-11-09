import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">
          Let's <span className="highlight">Connect</span>
        </h2>

        <div className="contact-content">
          {/* Left Side - Interactive Note */}
          <div className="contact-card">
            <div className="quick-note">
              <h3>Quick Note</h3>
              <p>
                Whether you have a project in mind or just want to say hello,
                I'm always excited to connect with fellow developers and potential collaborators.
              </p>
            </div>

            <div className="contact-divider"></div>

            <div className="contact-info">
              <div className="contact-info-item">
                <div className="icon-wrapper">
                  <FaEnvelope />
                </div>
                <a href="mailto:praneetm1403@gmail.com">
                  praneetm1403@gmail.com
                </a>
              </div>

              <div className="social-links">
                <a href="https://github.com/Praneetm1403" className="icon-wrapper">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/praneetmahendrakar/" className="icon-wrapper">
                  <FaLinkedin />
                </a>
                <a href="#" className="icon-wrapper">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your Name"
                  required
                />
                <div className="input-highlight"></div>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your Email"
                  required
                />
                <div className="input-highlight"></div>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Your Message"
                  required
                ></textarea>
                <div className="input-highlight"></div>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;