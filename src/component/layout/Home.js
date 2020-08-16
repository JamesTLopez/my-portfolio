import React from "react";

import { Cat, Email, Resume } from "../../images/images";

function Home() {
  return (
    <div className="title-content">
      <div className="home-content">
        <div className="portolio-title">
          <p>
            <span id="position">Frontend Developer</span>
          </p>
          <p>
            <span id="location">{`( Windsor-Canada === World-Wide )`}</span>
          </p>
        </div>
        <div className="Links">
          <div className="images">
            <img id="Cat" src={Cat} alt="Github" />
          </div>
          <div className="images">
            <img id="Email" src={Email} alt="Email" />
          </div>
          <div className="images">
            <img id="Resume" src={Resume} alt="Resume" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
