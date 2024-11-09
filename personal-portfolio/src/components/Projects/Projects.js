import React from 'react';
import './Projects.css';
import school2 from '../../assets/school2.jpg';
import blog from '../../assets/blog.jpg';
import attendrx from '../../assets/attendrx.png';
import Heart from '../../assets/Heart.jpeg';

const Projects = () => {
  const projects = [
    {
      name: 'School-Connect: A Web App',
      description: 'A web app to connect students and teachers, with features like messaging and scheduling.',
      imageUrl: school2,
      githubUrl: 'https://github.com/Praneetm1403/SchoolConnect',
      techStack: ['React Native', 'Expo', 'TypeScript', 'MongoDB', 'MERN Stack'], // Added tech stack
    },
    {
      name: 'Blogging Platform with AI Generator',
      description: 'A blogging platform with an integrated AI blog generator for automatic post creation.',
      imageUrl: blog,
      githubUrl: 'https://github.com/Praneetm1403/Blogging-Platform',
      techStack: ['React', 'MongoDB','Express','Node','Gen AI'], // Added tech stack
    },
    {
      name: 'Face Recognition Attendance System',
      description: 'A system to track student attendance using face recognition technology.',
      imageUrl: attendrx,
      githubUrl: 'https://github.com/Praneetm1403/AttendRx-Face-Recognition-Attendance-System',
      techStack: ['Python', 'Arduino IDE'], // Added tech stack
    },
    {
      name: 'Heart Disease Prediction',
      description: 'Developed a web application for heart disease risk assessment,integrating machine learning algorithms for prediction and front-end technologies for a user friendly interface.',
      imageUrl: Heart,
      githubUrl: 'https://github.com/Praneetm1403/Heart_Disease_Prediction',
      techStack: ['Machine Learning', 'Web-Development' ], // Added tech stack
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">
          My <span className="highlight">Projects</span>
        </h2>
        <div className="projects-content">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <h3 className="project-name">{project.name}</h3>
              <div className="project-image-container">
                <div className="project-image-wrapper">
                  <img
                    className="project-image"
                    src={project.imageUrl}
                    alt={project.name}
                  />
                  <div className="image-border"></div>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-item">{tech}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;