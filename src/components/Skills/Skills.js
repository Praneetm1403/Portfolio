import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di'; // Import JavaScript icon
import { GiTreeBranch } from 'react-icons/gi'; // Import DSA icon

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">My <span className="highlight">Skills</span></h2>
        <div className="skills-content">
          {/* Skill 1: React */}
          <div className="skill-card">
            <div className="skill-icon">
              <FaReact />
            </div>
            <h3 className="skill-name">React</h3>
            <p className="skill-description">
              Building interactive and dynamic user interfaces with React, using hooks and functional components.
            </p>
          </div>

          {/* Skill 2: Node.js */}
          <div className="skill-card">
            <div className="skill-icon">
              <FaNodeJs />
            </div>
            <h3 className="skill-name">Node.js</h3>
            <p className="skill-description">
              Developing scalable back-end services and RESTful APIs with Node.js, Express, and MongoDB.
            </p>
          </div>

          {/* Skill 3: HTML5 */}
          <div className="skill-card">
            <div className="skill-icon">
              <FaHtml5 />
            </div>
            <h3 className="skill-name">HTML5</h3>
            <p className="skill-description">
              Building the structure of websites using modern HTML5 standards for semantic and accessible markup.
            </p>
          </div>

          {/* Skill 4: CSS3 */}
          <div className="skill-card">
            <div className="skill-icon">
              <FaCss3Alt />
            </div>
            <h3 className="skill-name">CSS3</h3>
            <p className="skill-description">
              Designing and styling responsive websites using CSS3, Flexbox, CSS Grid, and Tailwind.
            </p>
          </div>

          {/* Skill 5: Git */}
          <div className="skill-card">
            <div className="skill-icon">
              <FaGitAlt />
            </div>
            <h3 className="skill-name">Git</h3>
            <p className="skill-description">
              Managing version control with Git, using GitHub for collaboration and code sharing.
            </p>
          </div>

          {/* Skill 6: C++ */}
          <div className="skill-card">
            <div className="skill-icon">
              <SiCplusplus />
            </div>
            <h3 className="skill-name">C++</h3>
            <p className="skill-description">
            Proficient in C++ for efficient coding, with a strong foundation in OOP, data structures, and algorithms.
            </p>
          </div>

          {/* Skill 7: Data Structures and Algorithms */}
          <div className="skill-card">
            <div className="skill-icon">
              <GiTreeBranch /> {/* DSA icon */}
            </div>
            <h3 className="skill-name">Data Structures & Algorithms</h3>
            <p className="skill-description">
              Understanding and implementing various data structures and algorithms for efficient problem-solving.
            </p>
          </div>

          {/* Skill 8: JavaScript */}
          <div className="skill-card">
            <div className="skill-icon">
              <DiJavascript1 /> {/* JavaScript icon */}
            </div>
            <h3 className="skill-name">JavaScript</h3>
            <p className="skill-description">
              Proficient in JavaScript for building dynamic web applications and enhancing user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;