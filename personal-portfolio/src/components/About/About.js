import React from 'react';
import './About.css';
import pic1 from '../../assets/pic1.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">
          About <span className="highlight">Me</span>
        </h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="text-card">
              <p className="about-description">
                Hello! I'm <span className="highlight">Praneet</span>, a passionate Computer Science Engineering student
                styding in Symbiosis institute of Technology, Pune.
              </p>
              <p className="about-description">
                My journey in tech started with curiosity and has evolved into a dedicated pursuit
                of creating impactful digital solutions. I believe in transforming ideas into experiences
                that make a difference.
              </p>
              <p className="about-description">
              When I'm not coding, you'll often find me just vibing to some music or simply enjoying a game of football.
              </p>
              <div className="gradient-overlay"></div>
            </div>
          </div>
          
          <div className="about-image-container">
            <div className="image-wrapper">
              <img 
                src={pic1} 
                alt="Profile" 
                className="about-image"
              />
              <div className="image-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;