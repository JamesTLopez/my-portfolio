import React from "react";
import { Link } from "react-router-dom";
import { Cat, Email, Resume } from "../../images/images";

function Home() {
  return (
    <div className="title-content">
      <div className="home-content">
        <div className="portolio-title">
          <p>
            <span id="position">Fullstack Developer</span>
          </p>
          <p>
            <span id="location">{`( Windsor-Canada === World-Wide )`}</span>
          </p>
        </div>
        <div className="Links">
          <div className="images">
            <a href="https://github.com/JamesTLopez/">
              <img id="Cat" src={Cat} alt="Github" />
            </a>
          </div>
          <div className="images">
            <Link id="Link" to="/my-portfolio/contact">
              <img id="Email" src={Email} alt="Email" />
            </Link>
          </div>
          <div className="images">
            <Link id="Link" to="/my-portfolio/contact">
              <img id="Resume" src={Resume} alt="Resume" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
