import React, { useEffect, useState } from 'react';
import { GithubIcon, Linkedin, Mail } from 'lucide-react';
import './Hero.css';
import { Dock, DockIcon } from './Dock'; 

const Hero = () => {
    const titles = ["Full Stack Developer", "Programmer", "Software Engineer"];
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(200);

    // Add particles effect
    useEffect(() => {
        const createParticle = () => {
            const particles = document.querySelector('.particles');
            if (!particles) return;

            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random size between 2-4px
            const size = Math.random() * 2 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random position
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Random animation
            const duration = Math.random() * 3 + 2;
            const delay = Math.random() * 2;
            particle.style.animation = `
                fadeIn ${duration}s ease-in forwards ${delay}s,
                float ${duration}s ease-in-out infinite ${delay}s
            `;
            
            particles.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                particle.remove();
            }, duration * 1000 + delay * 1000);
        };

        // Create particles periodically
        const interval = setInterval(() => {
            createParticle();
        }, 200);

        return () => clearInterval(interval);
    }, []);

    // Your existing effects and handlers...
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => clearInterval(ticker);
    }, [text, delta]);

    const tick = () => {
        let i = loopNum % titles.length;
        let fullText = titles[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(100);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200);
        }
    };

    const handleSocialClick = (platform) => {
        window.open(socialLinks[platform], '_blank');
    };

    const socialLinks = {
        github: "https://github.com/Praneetm1403",
        linkedin: "https://linkedin.com/in/praneetmahendrakar/",
        email: "mailto:praneetm1403@gmail.com"
    };

    return (
        <section id="home" className="hero">
            <div className="animated-background">
                <div className="particles"></div>
            </div>
            <div className="content-wrapper">
                <h1 className="hero-title">
                    Hello, I'm <span>Praneet Mahendrakar</span>
                </h1>
                <h2 className="hero-subtitle">
                    <span className="typed-text">{text}</span>
                    <span className="cursor">|</span>
                </h2>
                <p className="hero-description">
                A Dedicated CSE student with a passion for problem-solving and programming, focused on turning ideas into impactful solutions.
                </p>
               
                <div className="dock-wrapper horizontal-dock">
                    <DockIcon
                        className="social-icon-wrapper"
                        onClick={() => handleSocialClick('github')}
                    >
                        <GithubIcon className="social-icon github-icon" />
                    </DockIcon>
                    <DockIcon
                        className="social-icon-wrapper"
                        onClick={() => handleSocialClick('linkedin')}
                    >
                        <Linkedin className="social-icon linkedin-icon" />
                    </DockIcon>
                    <DockIcon
                        className="social-icon-wrapper"
                        onClick={() => handleSocialClick('email')}
                    >
                        <Mail className="social-icon email-icon" />
                    </DockIcon>
                </div>
            </div>
        </section>
    );
};

export default Hero;