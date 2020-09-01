import React from "react";
import '../../styles/toolkitcard.css'

function ToolkitCard({ name, image, id, hov }) {
  return (
    <div className="toolkit-card-container">
      <div className={`tookit-card`}>
        <div className="image-box">
          <img id={id} src={image} alt={id}></img>
        </div>
        <div className="content-box">
          <div className="content-title">
            <label></label>
          </div>
          <div className="content-container">

          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolkitCard;
