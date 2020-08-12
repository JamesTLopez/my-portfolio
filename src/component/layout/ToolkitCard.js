import React from "react";
import '../../styles/toolkitcard.css'

function ToolkitCard({ name, image, id, hov }) {
  return (
    <div className="card-container">
      <div className={`card ${hov}`}>
        <div className="image-box">
          <img id={id} src={image} alt={id}></img>
        </div>
        <div className="content-box">

          
        </div>
      </div>
    </div>
  );
}

export default ToolkitCard;
