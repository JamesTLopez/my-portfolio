import React from "react";


//Components
import ProjectCard from "../layout/ProjectCard";
import ToolkitCard from "../layout/ToolkitCard";
import Navbar from "../layout/Navbar"

//Images
import Chordify from "../../images/chordify.png";
import Lyricly from "../../images/lyricly.png";
import OnlineWhite from "../../images/online.png";
import Cat from "../../images/Gitcat.png"
import Email from "../../images/email.png"
import Resume from "../../images/resume.png"
import HTML from "../../images/html.png"
import Javascript from "../../images/javascript.png"
import CSS from "../../images/css.png"
import Reacts from "../../images/react.png"
import Type from "../../images/type.png"
import Sass from "../../images/sass.png"
import Git from "../../images/git.png"
import Photo from "../../images/affinityphoto.png"
import Designer from "../../images/affinitydesigner.png"
// import Frontend from "../../images/frontendLarge.png";
// import Server from "../../images/server.png";
// import Webtech from "../../images/webtech.png";

const Home = () => {
  return (
    <div className="home-page">
      <section className="title">
       <Navbar/>
       <main>
         <div className="title-content">
            <div className="portolio-title">
              <p><span id="position">Frontend Developer</span></p>
              <p><span id='location'>{`( Windsor-Canada === World-Wide )`}</span></p>
            </div>
            <div className="Links">
              <div className="images">
                <img id="Cat" src={Cat} alt="Github"/>
              </div>
              <div className="images">
              <img id="Email" src={Email} alt="Email"/>
              </div>
              <div className="images">
                <img id="Resume" src={Resume} alt="Resume"/>
              </div>
            </div>
         </div>
       </main>
      </section>
      <section className="content">
        <div className="project-content">
          <div className="project-header">
          <div className="images">
              <img src={Sass} alt="Sass"></img>
            </div>
            <div className="images">
              <img src={CSS} alt="CSS"></img>
            </div>
            <div className="images">
              <img src={HTML} alt="Html"></img>
            </div>
            <div className="images">
              <img id="javascript" src={Javascript} alt="JavaScript"></img>
            </div>
            <div className="images">
              <img id="react" src={Reacts} alt="React"></img>
            </div>
            <div className="images">
              <img src={Type} alt="Type"></img>
            </div>
            <div className="images">
              <img src={Git} alt="Git"></img>
            </div>
            <div className="images">
              <img src={Photo} alt="Git"></img>
            </div>
            <div className="images">
              <img src={Designer} alt="Git"></img>
            </div>
          </div>
          <div className="latest-works-title">
            <p id="chapter">Projects</p>
            <p id="chapter-content">Latest Works</p>
          </div>
          <div className="latest-works-content">
            <ProjectCard
              name="Chordify"
              image={Chordify}
              id="chordify"
              hov="hov1"
            />
            <ProjectCard
              name="Lyricly"
              image={Lyricly}
              id="lyricly"
              hov="hov2"
            />
            <ProjectCard
              name="Whiteboard"
              image={OnlineWhite}
              id="onlinewhite"
              hov="hov3"
            />
          </div>
        </div>
        <div className="toolkit-content">
          <div className="toolkit-container">
            <div className="toolkit-title">
              <p id="chapter">Toolkit</p>
              <p id="chapter-content">Technologies</p>
            </div>
            <div class="toolkit-cards">

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
