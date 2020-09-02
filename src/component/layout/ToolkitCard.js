import React from "react";
import "../../styles/toolkitcard.css";

function ToolkitCard({ name, image,source_url,id }) {
  return (
    <div className="toolkit-card-container">
      <div className={`tookit-card`}>
        <div className="image-box">
          <img id={id} src={image} alt={id}></img>
        </div>
        <div className="content-box">
          <div className="content-title">
          <label>{name}</label>
          </div>
          <div className="content-container">
            <a href="www.google.com">
              <button>About</button>
            </a>
            <a href={source_url}>
              <button>Source Code</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolkitCard;
