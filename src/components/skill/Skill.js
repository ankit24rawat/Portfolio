import React from 'react';
import './Skill.css';
import frontend from "../assets/frontend.jpg";
import backend from "../assets/backend.jpg";
import general from "../assets/general.jpg";

import Fade from 'react-reveal/Fade';

//TODO: Add image slider

const Skill = () => {

  const title_name = "< Skills />"

  return (
    <>
      <section id='skill'>
        <div className="skl">
          <h1 className="title">{title_name}</h1>
          <div className='skl-cont'>
           <Fade left>
              <div className="skl-card">
                    <img className='img-shadow' src={frontend} alt='Frontend' />
                    <h2 className="card-title">frontend</h2>
                    <ul>
                      <li>React</li>
                      <li>HTML, CSS, SASS, Tailwind CSS</li>
                      <li>BootStrap, Canva</li>
                      {/* <li>Redux / Context API</li> */}
                      {/* <li>BootsTrap</li> */}
                    </ul>
              </div>
           </Fade>
           <Fade bottom>
              <div className="skl-card">
                    <img className='img-shadow' src={backend} alt='Backend' />
                    <h2 className="card-title">Backend</h2>
                    <ul>
                      <li>Node, Express</li>
                      <li>MongoDB</li>
                      <li>Docker, Vercel, AWS, Firebase</li>
                      {/* <li>REST APIs</li> */}
                    </ul>
              </div>
           </Fade>
            <Fade right>
              <div className="skl-card">
                    <img className='img-shadow' src={general} alt='General' />
                    <h2 className="card-title">General</h2>
                    <ul>
                      <li>JavaScript / TypeScript</li>
                      <li>C / C++</li>
                      <li>Data Structures & Algorithms</li>
                      <li>Git, GitHub, Jira</li>
                      {/* <li>VS Code</li>
                      <li>Linux</li> */}
                    </ul>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
