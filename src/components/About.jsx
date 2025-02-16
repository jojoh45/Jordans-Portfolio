import React from 'react';
import FadeUp from './FadeUp';
import '../styles/About.css';

function About() {
    const tech_stack = ['Python', 'C++', 'Kotlin', 'Java', 'Javascript', 'React JS', 'Node JS', 'SMF'];

    return (
        <div id='about'>
            <FadeUp delay={0.6}>
                <div className="section-header">
                    <span className="section-title">About Me</span>
                </div>
                <div className="about-content">
                    <div className="about-description">
                        <p>
                            I amx currently a <b>Modeling & Simulation Engineer at</b> <a href='https://www.sri.com/'> SRI </a> as a government contractor for the <b>Army</b>. I graduated from <b>Morgan State University</b> with a degree in <b>Computer Science</b>. I am passionate about coding and I am always looking for new ways to improve my skills. I am always looking for new opportunities to learn and grow as a developer. I am excited to see where my coding journey takes me and I am looking forward to the future.
                        </p>
                        <ul className="tech-stack">
                            {tech_stack.map((tech, index) => (
                                <FadeUp key={index} delay={`${index * 0.1}`}>
                                    <li key={index}>{tech}</li>
                                </FadeUp>
                            ))}
                        </ul>
                        <p>
                            Outside of work I like to workout, travel, and watch sports. I am a huge fan of the Baltimore Ravens and I try to watch every game. I also enjoy working out and traveling in my free time. I am always looking for new places to visit and new things to see. I also like to play video games and watch anime in my free time.
                        </p>
                    </div>
                    <div className='about-image'>
                        <img src="me.png" alt="Jordan Johnson" />
                    </div>
                </div>
            </FadeUp>
        </div>
  )
};

export default About;