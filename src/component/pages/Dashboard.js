import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

//Components
import ProjectCard from "../layout/ProjectCard";
import ToolkitCard from "../layout/ToolkitCard";
import Navbar from "../layout/Navbar";

import Home from "../layout/Home";
import About from "../layout/About";
import Contact from "../layout/Contact";

import {
  Chordify,
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
  Node,
  GithubCat,
  Concurrent,
  Bootstrap,
  AudioVis,
  Oak,
  Portfolio,
  Banking
} from "../../images/images";

const Dashboard = () => {
  return (
    <div className="home-page">
      <section className="title">
        <Navbar />
        <main>
          <Switch>
            <Route
              exact
              path={`${useRouteMatch().path}`}
              component={Home}
            ></Route>
            <Route path={`/my-portfolio/about`} component={About}></Route>
            <Route path={`/my-portfolio/contact`} component={Contact}></Route>
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
              <img id="photo" src={Photo} alt="AffinityPhoto"></img>
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
                demo_url="https://jamestlopez.github.io/chord-finder/"
                about_url=""
                isDemo={true}
                source_url="https://github.com/JamesTLopez/chord-finder"
                demo_example="https://user-images.githubusercontent.com/44413841/88328694-d3767b80-ccf6-11ea-9d21-ee3c975893b9.gif"
                description="A chord finding app that displays the type of chord played based on the notes pressed on the keyboard or tells the notes a chord is create from the selected chord buttons displayed at the bottom."
                tech={[HTML,Reacts,Javascript,Node,Sass]}
              />
              <ProjectCard
                name="Easy-Git"
                image={GithubCat}
                id="lyricly"
                hov="hov2"
                demo_url="https://jamestlopez.github.io/easy-git/"
                about_url=""
                isDemo={true}
                source_url="https://github.com/JamesTLopez/easy-git"
                demo_example="https://user-images.githubusercontent.com/44413841/91918490-06664480-ec91-11ea-8a1f-5e983cb8aa2f.gif"
                description="A simple react typescript app that searches and displays a users github repos and information."
                tech={[HTML,Reacts,Type,Node,Sass]}
              />
              <ProjectCard
                name="Audio Visulizer"
                image={AudioVis}
                id="audiovis"
                hov="hov3"
                demo_url={''}
                about_url=""
                isDemo={false}
                source_url="https://github.com/JamesTLopez/audio-visualizer"
                demo_example="https://user-images.githubusercontent.com/44413841/93008254-a39e6400-f540-11ea-8af4-3781fc750691.gif"
                description="An app that analyzes the frequency spectrum of a input audio media file and visualizes it using the animation library p5."
                tech={[HTML,Reacts,Type,Sass]}
              />
              <ProjectCard
                name="Whiteboard"
                image={OnlineWhite}
                id="onlinewhite"
                hov="hov4"
                demo_url={null}
                isDemo={false}
                about_url=""
                source_url="https://github.com/JamesTLopez/Online-Whiteboard"
                demo_example="https://user-images.githubusercontent.com/44413841/88430155-f58aff00-cdc5-11ea-8bbc-f92eb68d9067.gif"
                description="An online lobby that allows multiple clients to enter a room and simultaniously draw on the displayed area and chat with others in a separate text field."
                tech={[HTML,Reacts,Javascript,CSS,Node,Bootstrap]}
              />
            </div>
          </div>
        </div>
        <div className="toolkit-content">
          <div className="toolkit-container">
            <div className="toolkit-title">
              <p id="chapter-content">All Projects</p>
            </div>
            <div className="toolkit-cards">
              <div className="card-container">
                <ToolkitCard
                  name="Concurrent File Editing"
                  image={Concurrent}
                  source_url="https://github.com/JamesTLopez/Concurrent-File-Editing"
                  demo_example="https://user-images.githubusercontent.com/44413841/88588057-ece43400-d024-11ea-99dc-896e9381ac99.gif"
                  description="A concurrent file editing app that allows users to save and access created documents. Users and simultaneously edit the document at the same time"
                  tech={[HTML,Node,CSS]}
                />
                <ToolkitCard
                  name="my-portfolio"
                  image={Portfolio}
                  source_url="https://github.com/JamesTLopez/my-portfolio"
                  description="The repository for my portfolio website"
                  tech={[HTML,Reacts,Sass,Javascript]}
                />
                <ToolkitCard
                  name="me-banking"
                  image={Banking}
                  source_url="https://github.com/JamesTLopez/my-portfolio"
                  description="A banking admin app that manages clients income. DATABASE EXPIRED"
                  tech={[HTML,Reacts,Sass,Javascript]}
                />
                    <ToolkitCard
                  name="Oak"
                  image={Oak}
                  source_url="https://github.com/JamesTLopez/my-portfolio"
                  description="The repository for my portfolio website"
                  tech={[HTML,Reacts,Sass,Javascript]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
