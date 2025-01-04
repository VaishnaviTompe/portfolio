import React from 'react';
import './About.css'; // Import the new CSS file

const About = () => {
  return (
    <div className="about-page">
      <h2>About Me</h2>
      <div className="underline1"></div>
      <div className="underline2"></div>
      {/* <h3>
        I am Vaishnavi Tompe and <span className="highlight">Full Stack Developer</span>
      </h3> */}
      <p>
      Skills Full Stack Developer with 1 year of experience specializing in building scalable and efficient
applications usingReact, React Native, Node.js, and Python. Adept at database management with MongoDB
and MySQL, and experienced in crafting user-focused interfaces with HTML, CSS, and Bootstrap. Seeking a
challenging position to leverage mytechnical skills and contribute to the success of forward-thinking projects.
      </p>

      <div className="personal-info">
        <div>
          <p><strong>Birthday:</strong> 21 Dec 2000</p>
          <p><strong>Languages:</strong> English , Hindi</p>
          <p><strong>Email:</strong> tompevaishnavi89@gmail.com</p>
        </div>
        <div>
          <p><strong>Age:</strong> 24</p>
          <p><strong>Phone:</strong> 8308069316</p>
          <p><strong>City:</strong> Pune</p>
        </div>
      </div>

      <div className="skills">
        <div className="skill-bar">
          <p>Node JS <span>80%</span></p>
          <div className="progress">
            <div className="progress-fill" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="skill-bar">
          <p>Express JS <span>85%</span></p>
          <div className="progress">
            <div className="progress-fill" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="skill-bar">
          <p>HTML5 / CSS <span>95%</span></p>
          <div className="progress">
            <div className="progress-fill" style={{ width: '95%' }}></div>
          </div>
        </div>
        <div className="skill-bar">
          <p>Bootstrap <span>95%</span></p>
          <div className="progress">
            <div className="progress-fill" style={{ width: '95%' }}></div>
          </div>
        </div>
        <div className="skill-bar">
          <p>Javascript <span>85%</span></p>
          <div className="progress">
            <div className="progress-fill" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="skill-bar">
          <p>MongoDB <span>90%</span></p>
          <div className="progress">
            <div className="progress-fill" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="skill-bar">
          <p>MySQL <span>85%</span></p>
          <div className="progress">
            <div className="progress-fill" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>

      {/* <button className="hire-me-btn">Hire Me</button> */}

      <div className="education-experience">
        <div className="education">
          <div className='abouth2'>Education</div>
          <div className="timeline">
            <div className="timeline-item">
            <div className='padding-bottom'>
            <h4>B.Tech</h4>
              <p>2018 - 2022</p>
              <p>Dr. Babasaheb Ambedkar Technological University.</p>
              <p>CGPA - 7.99</p>
            </div>
            <div className='hori-line'></div>
            <div className='padding-bottom'>
            <h4>B.Tech</h4>
              <p>2017 - 2018</p>
              <p>Shree. Shivaji Junior College.</p>
              <p>Percentage - 64.15</p>
            </div>
            <div className='hori-line'></div>
            <div className='padding-bottom'>
            <h4>SSC</h4>
              <p>2015 - 2016</p>
              <p>Mahatma Phule High School.</p>
              <p>Percentage - 83</p>
            </div>
              
            </div>
          </div>
        </div>
        <div className="experience">
          <div className='abouth2'>Experience</div>
          <div className="timeline">
            <div className="timeline-item">
            <div className='padding-bottom'>
            <h4 className='exp'>Work Experience</h4>
              <p>Full Stack Developer at GenAiKit Software Solutions Pvt. Ltd. </p>
              <p>Jan 2024 - Present</p>
            </div>

            <div className='hori-line'></div>

            <div className='padding-bottom'>
            <h4 className='exp'>Internship Experience</h4>
              <p>Full Stack Developer at GenAiKit Software Solutions Pvt. Ltd. </p>
              <p>Oct 2023 - Dec 2023</p>
            </div>

            <div className='hori-line'></div>
            <div className='padding-bottom'>
            <h4 className='exp'>Internship Experience</h4>
              <p>DRDL Hyderabad, India</p>
              <p>April 2022 - July 2022</p>
            </div>

            </div>

           
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
