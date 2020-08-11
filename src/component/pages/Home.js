import React from "react";
import ProjectCard from "../layout/ProjectCard";
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
        <header></header>
      </section>
      <section className="content">
        <div className="project-content">
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
