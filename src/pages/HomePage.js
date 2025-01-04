import React from 'react';
import './HomePage.css'; // Import your CSS file

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>
        Hello, my name is <span className="name">Vaishnavi Tompe</span>
      </h1>
      <h2>
        I am a <span className="highlight">Full Stack Developer</span>
      </h2>
      <p>
        My expertise is to create and design websites and much more...
      </p>
      {/* <button className="download-btn">Download CV</button> */}

      <a href="./VaishnaviTompe.pdf" download>
        <button className="download-btn">Download CV</button>
      </a>

    </div>
  );
};

export default HomePage;
