import React from 'react';
import './Portfolio.css'; // Import the CSS file for Portfolio styling

const Portfolio = () => {
  const projects = [
    {
      title: 'Ecommerce Web App',
      imgSrc: '/img/1_ecommerce.JPG',
      link: 'https://royalecommerce.netlify.app/',
    },
    {
      title: 'Job Portal',
      imgSrc: '/img/2_Jobportal.JPG',
      link: 'https://resumeparser1.netlify.app/Signin',
    },
    {
      title: 'Chat with PDF',
      imgSrc: '/img/3_LLM.JPG',
      link: 'https://langchainpdf.netlify.app/',
    },
    {
      title: 'Quiz App',
      imgSrc: '/img/4_Gate.JPG',
      link: 'https://mern-gatesite.netlify.app/',
    },
    {
      title: 'HR Web App',
      imgSrc: '/img/5_hrportal.JPG',
      link: '#',
    },
  ];

  return (
    <div className="portfolio-page">
      <h2>Portfolio</h2>
      <div className="underline1"></div>
      <div className="underline2"></div>
      <h3>My Projects:</h3>

      <div className="projects-grid">
        {projects.map((project, index) => (

          <div key={index} className="project-card">

            <a href={project.link} target="_blank" rel="noopener noreferrer">

              <img src={project.imgSrc} alt={project.title} className="project-image" />

              <h5>{project.title}</h5>
            </a>
          </div>

        ))}
      </div>

    </div>
  );
};

export default Portfolio;
