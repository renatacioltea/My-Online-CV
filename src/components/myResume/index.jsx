import React from "react";

import ExperienceComponent from "./experience-component";

function MyResume() {
  return (
    <main className="container">
      <div className="experience-logo">
        <img src="assets/images/flowers2.png" alt="flowers-experience-page" />
      </div>

      <div className="resume-container">
        
        <ExperienceComponent
          title={
            <span>
              <i className="fas fa-graduation-cap"></i> Education
            </span>
          }
          content={
            <div className="dropdown-info">
              <div className="content">
                <img src="assets/images/logo-scoala-informala.jpeg" alt="scoala-informala-logo"/>
                <p>Front-end Web Development</p>
                <p>March 2020 - August 2020</p>
                <p>Scoala Informala de It Cluj- Napoca</p>
                <p>HTML, CSS, Javascript, React Js</p>
              </div>

              <div className="content">
                <img src="assets/images/fsega-logo.jpg" alt="fsega-logo" />
                <p>Master`s Degree in Accounting, Audit and Controlling</p>
                <p>October 2015 - July 2017</p>
                <p>
                  Facultatea de Stiinte Economice si Gestiunea Afacerilor
                  Cluj-Napoca
                </p>
              </div>

              <div className="content">
                <img src="assets/images/ubb-logo_n.jpg" alt="ubb-logo"/>
                <p>Bachelor`s Degree in Business Administration</p>
                <p>October 2012 - July 2015</p>
                <p>UBB Facultatea de Business Cluj - Napoca</p>
              </div>
            </div>
          }
        ></ExperienceComponent>

        <ExperienceComponent
          title={
            <span>
              <i className="fas fa-briefcase"></i>Work Experience
            </span>
          }
          content={
            <div className="dropdown-info">
              <div className="content">
                <img src="assets/images/eon-logo.png" alt="eon-logo"/>
                <p>Accounts Payable Associate</p>
                <p>October 2018 - Present</p>
                <p>E.ON Business Services Cluj</p>
              </div>

              <div className="content">
                <img src="assets/images/rsm-logo.png" alt="rsm-logo" />
                <p>Accountant</p>
                <p>March 2017 - September 2018</p>
                <p>RSM Romania Srl</p>
              </div>

              <div className="content">
                <img src="assets/images/kan-ban-logo.jpg" alt="kan-ban-logo"/>  
                <p>Accounting Intern</p>
                <p>October 2015 - March 2017</p>
                <p>Sc Kan Ban Srl</p>
              </div>
            </div>
          }
        ></ExperienceComponent>

        <ExperienceComponent
          title={
            <span>
              <i className="fas fa-cogs"></i>Skills
            </span>
          }
          content={
            <div className="dropdown-info">
              <div className="content">
                <img src="assets/images/hard-skills .png" alt="hard-skills"/>
                <h5>Tehnical skills :</h5>
                <p>Accounting knowledge</p>
                <p>Mathematical skills</p>
                <p>Data Analysis</p>
              </div>

              <div className="content">
                <img src="assets/images/soft-skills.png" alt="soft-skills"/>
                <h5>Interpersonal skills :</h5>
                <p>Motivation</p>
                <p>Communication</p>
                <p>Teamwork</p>
              </div>
            </div>
          }
        >
        </ExperienceComponent>
      </div>
    </main>
  );
}

export default MyResume;
