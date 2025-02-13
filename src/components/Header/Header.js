import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    
    // Adjusting the threshold to 0.5 to trigger earlier when the section is halfway in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Update active section on intersection
          }
        });
      },
      { threshold: [0.3] } // Adjusted to 0.5 for better tracking when sections are halfway visible
    );

    sections.forEach((section) => {
      observer.observe(section); // Observe all sections
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section); // Cleanup the observer
      });
    };
  }, []);

  // Ensure activeSection gets updated on click (important for navigation)
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <header className="fixed w-full top-0 left-0 bg-black shadow-md z-50 py-3 px-6">
      <nav className="flex items-center justify-between">
        {/* Logo/Name */}
        <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">
          Praneet
        </div>

        {/* Navigation Items */}
        <ul className="flex items-center space-x-6">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className={`text-md ${
                activeSection === 'home' ? 'text-red-400 font-semibold' : 'text-gray-200'
              } hover:text-red-400 transition-colors duration-300 cursor-pointer`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className={`text-md ${
                activeSection === 'about' ? 'text-red-400 font-semibold' : 'text-gray-200'
              } hover:text-red-400 transition-colors duration-300 cursor-pointer`}
              onClick={() => handleNavClick('about')}
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className={`text-md ${
                activeSection === 'projects' ? 'text-red-400 font-semibold' : 'text-gray-200'
              } hover:text-red-400 transition-colors duration-300 cursor-pointer`}
              onClick={() => handleNavClick('projects')} // Update active section on click
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className={`text-md ${
                activeSection === 'skills' ? 'text-red-400 font-semibold' : 'text-gray-200'
              } hover:text-red-400 transition-colors duration-300 cursor-pointer`}
              onClick={() => handleNavClick('skills')}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={`text-md ${
                activeSection === 'contact' ? 'text-red-400 font-semibold' : 'text-gray-200'
              } hover:text-red-400 transition-colors duration-300 cursor-pointer`}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </Link>
          </li>
          <li>
            <a 
              href="/cv" 
              className="px-4 py-1 bg-gradient-to-r from-red-500 to-orange-600  text-black rounded-md font-medium hover:bg-yellow-600 transition-colors duration-300 text-md"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
