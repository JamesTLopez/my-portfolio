import React from "react";
import {Link} from "react-router-dom"
//Components
import ProjectCard from "../layout/ProjectCard";
import ToolkitCard from "../layout/ToolkitCard";

//Images
import Chordify from "../../images/chordify.png";
import Lyricly from "../../images/lyricly.png";
import OnlineWhite from "../../images/online.png";
import Frontend from "../../images/frontendLarge.png";
import Server from "../../images/server.png";
import Webtech from "../../images/webtech.png";

const Home = () => {
  return (
    <div className="home-page">
      <section className="title">
        <header>
          <div className="Name">
            <p>James Lopez</p>
          </div>
          <div className="navigation">
            <nav>
              <ul>
                <li><Link id="Link" path="/">Home</Link></li>
                <li><Link id="Link" path="/about">About</Link></li>
                <li><Link id="Link" path="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>
      </section>
      <section className="content">
        <div className="project-content">
          <div className="project-header"></div>
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
              <ToolkitCard
                name="Frontend"
                image={Frontend}
                id="frontend"
                hov="hov1"
              />
              <ToolkitCard
                name="Server"
                image={Server}
                id="server"
                hov="hov2"
              />
              <ToolkitCard
                name="Webtech"
                image={Webtech}
                id="webtech"
                hov="hov3"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
