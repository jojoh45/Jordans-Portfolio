import React from 'react';
import FadeUp from './FadeUp';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ExternalLinks from './ExternalLinks';
import "../styles/Projects.css";

function Projects() {

    const projects = [
        {
            name: 'MyFlixster App',
            desc: "Integrated the MovieDB API seamlessly into the application to access a vast database of movie-related information,including actor names, images, popular movies, and detailed movie descriptions.",
            techStack: ['HTML', ' Node JS  ', ' Express JS ', ' Postgres SQL ', ' Axios ', ' EJS '],
            link: "https://github.com/jojoh45/MyFlixster"
        },
        {
            name: 'Book Notes Web App',
            desc: "Developed a full-stack web application that allows users to create, read, update, and delete notes. Integrated the Open Library Covers API to search for and display book covers based on the book title, enhancing the user experience.",
            techStack: [' HTML ', ' Node JS ', ' Express JS ', ' Postgres SQL ', ' Axios ', ' EJS ', ' Open Library Covers API ', ' Bootstrap '],
            link: "https://github.com/jojoh45/Book-Notes"
        },
        {
            name: 'NBA-Predictor App',
            desc: 'This application allows users to compare two NBA players average points per game for the 2023 season. It uses the balldontlie API to fetch player data and provides a simple form interface where users can input player names, with the result displayed on a webpage.',
            techStack: [' HTML ', ' Node JS ', ' Express JS ', ' Axios ', ' EJS ', ' Open Library Covers API ', ' Bootstrap '],
            link: "https://github.com/jojoh45/NBA-Predictor"
        }
];

  return (
    <div id='projects'>
        <div className='section-header'>
            <span className='section-title'>Projects</span>
        </div>

        <div className="project-container">
            <ul className='projects-grid'>
                {projects.map((project, index) => (
                    <FadeUp delay={`${index * 0.5}`} key={index}>
                        <li className="projects-card">
                            <div className="card-header">
                                <div className="folder-icon">
                                    <FolderOpenIcon>
                                        style={{fontSize: 35}}
                                    </FolderOpenIcon>  
                                </div>
                                <ExternalLinks 
                                    githubLink={project.link}>
                                </ExternalLinks>
                            </div>

                            <div className="card-t">{project.name}</div>
                            <div className="card-desc">{project.desc}</div>
                            <div className="card-tech">{project.techStack}</div>
                        </li>
                    </FadeUp>
                ))}
            </ul>
        </div>
    </div> 
  );
}

export default Projects;