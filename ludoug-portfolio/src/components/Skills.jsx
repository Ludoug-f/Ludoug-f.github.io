import React from "react";
import "../style/Skills.css";

export default function Skills() {
  return(
    <div className="container-skills" id="skills">
      <div className="banner-skill">
          <div className="title-skills">
            <h1>Skills</h1>
          </div>
          <div className="content-skills">
            <div className="skills-cards">
              <img src="https://img.icons8.com/color/96/000000/html-5--v1.png" alt="html5"></img>
              <span>
                HTML5
              </span>
            </div>
            <div className="skills-cards">
              <img src="https://img.icons8.com/color/96/000000/css3.png" alt="css3"></img>
              <span>
                CSS3
              </span>
            </div><br/>
            <div className="skills-cards">
              <img src="https://img.icons8.com/color/96/000000/javascript--v1.png" alt="javascript"></img>
              <span>
                JavaScript
              </span>
            </div><br/>
            <div className="skills-cards">
              <img src="https://img.icons8.com/color/96/000000/react-native.png" alt="react-native"></img>
              <span>
                React
              </span>
            </div><br/>
            <div className="skills-cards">
              <img src="https://img.icons8.com/color/96/000000/nodejs.png" alt="nodejs"></img>
              <span>
                NodeJS
              </span>
            </div><br/>
            <div className="skills-cards">
              <img src="https://img.icons8.com/color/96/000000/mongodb.png" alt="mongodb"></img>
              <span>
                MongoDB
              </span>
            </div><br/>
            <div className="skills-cards">
              <img src="https://img.icons8.com/color/96/000000/python.png" alt="python"></img>
              <span>
                Python
              </span>
            </div><br/>
            <div className="skills-cards">
              <img src="https://img.icons8.com/color/96/000000/mysql.png" alt="mysql"></img>
              <span>
                MySQL
              </span>
            </div><br/>
          </div>
      </div>
    </div>
  );
}