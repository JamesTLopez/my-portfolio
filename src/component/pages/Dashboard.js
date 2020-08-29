import React, {useState} from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

//Components
import ProjectCard from "../layout/ProjectCard";
import ToolkitCard from "../layout/ToolkitCard";
import Navbar from "../layout/Navbar";

import Home from "../layout/Home"
import About from "../layout/About"
import Contact from "../layout/Contact"


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
            <Route  path={`/contact`} component={Contact}></Route>
          </Switch>
           
      
        </main>
      </section>
      <section className="content">
        <div className="project-content">
          <div className="project-header">
            <div className="images">
              <img id="sass" src={Sass} alt="Sass"></img>
              <p id="tooltip">Sass</p>
            </div>
            <div className="images">
              <img id="css" src={CSS} alt="CSS"></img>
              <p id="tooltip">CSS</p>
            </div>
            <div className="images">
              <img id="html" src={HTML} alt="Html"></img>
              <p id="tooltip">HTML</p>
            </div>
            <div className="images">
              <img id="javascript" src={Javascript} alt="JavaScript"></img>
              <p id="tooltip">Javascript</p>
            </div>
            <div className="images">
              <img id="react" src={Reacts} alt="React"></img>
              <p id="tooltip">React</p>
            </div>
            <div className="images">
              <img id="typescript" src={Type} alt="Type"></img>
              <p id="tooltip">Typescript</p>
            </div>
            <div className="images">
              <img id="node" src={Node} alt="Node"></img>
              <p id="tooltip">NodeJs</p>
            </div>
            <div className="images">
              <img id="git" src={Git} alt="Git"></img>
              <p id="tooltip">Git</p>
            </div>
            <div className="images">
              <img id="photo" src={Photo} alt="Photo"></img>
              <p id="tooltip">Affinity Photo</p>
            </div>
            <div className="images">
              <img id="designer" src={Designer} alt="Designer"></img>
              <p id="tooltip">Affinity Designer</p>
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
                demo_url=""
                about_url=""
                source_url="https://github.com/JamesTLopez/chord-finder"
              />
              <ProjectCard
                name="Easy-Git"
                image={Lyricly}
                id="lyricly"
                hov="hov2"
                demo_url=""
                about_url=""
                source_url="https://github.com/JamesTLopez/easy-git"
              />
              <ProjectCard
                name="Whiteboard"
                image={OnlineWhite}
                id="onlinewhite"
                hov="hov3"
                demo_url=""
                about_url=""
                source_url="https://github.com/JamesTLopez/Online-Whiteboard"
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
