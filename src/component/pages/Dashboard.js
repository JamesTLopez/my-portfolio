import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

//Components
import ProjectCard from "../layout/ProjectCard";
import ToolkitCard from "../layout/ToolkitCard";
import Navbar from "../layout/Navbar";

import Home from "../layout/Home"
import About from "../layout/About"

//Images

// import Frontend from "../../images/frontendLarge.png";
// import Server from "../../images/server.png";
// import Webtech from "../../images/webtech.png";

import {
  Chordify,
  Lyricly,
  OnlineWhite,
  HTML,
  Javascript,
  CSS,
  Reacts,
  Type,
  Sass,
  Git,
  Photo,
  Designer,
  Node
} from "../../images/images";

const Dashboard = () => {
  return (
    <div className="home-page">
      <section className="title">
        <Navbar />
        <main>
          
           <Switch>
            <Route  exact path={`${useRouteMatch().path}`} component={Home}></Route>
            <Route  path={`/about`} component={About}></Route>
          </Switch>
           
      
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
              <img src={Node} alt="Node"></img>
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
          <div className="latest-works">
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
        </div>
        <div className="toolkit-content">
          <div className="toolkit-container">
            <div className="toolkit-title">
              <p id="chapter">Toolkit</p>
              <p id="chapter-content">Technologies</p>
            </div>
            <div class="toolkit-cards"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
