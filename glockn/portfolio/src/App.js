import "./App.css";
import profilePicture from "./images/profile-pic.jpg";
import logo from "../src/images/logo.ico";
import zaapp from "../src/images/zaapp-app.png";
import kelviniv from "../src/images/kelviniv.png";

// import { IonIcon } from "@ionic/react";
// import { folderOutline } from "ionicons/icons";
import React from "react";

function App() {
  return (
    <div className="App">
      <header>
        <nav className="nav-header">
          <div className="logo">
            <a href="/">
              <div className="logo-setter">
                <img className="logo-img" src={logo} alt="logo" />
                <h3 className="title">Okungbowa God'spower</h3>
              </div>
            </a>
            <h5 className="job-title">Frontend Developer</h5>
          </div>
          <div className="nav-link">
            <ul className="nav-links">
              <li>
                About <span className="line">&#x7c;</span>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/okungbowagodspower">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/OkungbowaGodspower">GitHub</a>
              </li>
              <li>
                <a href="https://okungbowagodspower.hashnode.dev">Articles</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section className="about-me margin-section">
          <div className="side-box-1">
            <div className="img">
              <img
                className="profile-pic"
                src={profilePicture}
                alt="Description"
              />
            </div>
            <div className="my-name">I'm Okungbowa God'spower.</div>
            <div className="bio">
              Building excellent{" "}
              <span className="highlight">
                modern web sites and web applications
              </span>{" "}
              with a focus on functionality, aesthetics and accessibility.
            </div>
          </div>
        </section>
        <section className="projects margin-section">
          <h1 className="margin-section project-title">
            {/* <IonIcon className="icon-logo" icon={folderOutline} /> */}
            Projects
          </h1>
          <div className="project-box">
            <div className="project-info card ">
              <img className="project-img" src={zaapp} alt="project logo" />
              <h2 className="project-name">Zaapp</h2>
              <h3 className="project-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
                consectetur illum voluptate dolorem quae excepturi.
              </h3>
              <div className="btn-links">
                <a className="btn-to" href="https://app-zaapp.vercel.app/">
                  Live Demo
                </a>
                <a
                  className="btn-to"
                  href="https://github.com/OkungbowaGodspower/Zaapp-Alx-Porfolio-Project"
                >
                  Source Code
                </a>
              </div>
            </div>
            <div className="project-info card ">
              <img className="project-img" src={kelviniv} alt="project logo" />
              <h2 className="project-name">Kelviniv</h2>
              <h3 className="project-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
                consectetur illum voluptate dolorem quae excepturi.
              </h3>
              <div className="btn-links">
                <a
                  className="btn-to"
                  href="https://kelvinivgreenland.netlify.app/"
                >
                  Live Demo
                </a>
                <a
                  className="btn-to"
                  href="https://github.com/OkungbowaGodspower/Zaapp-Alx-Porfolio-Project"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
