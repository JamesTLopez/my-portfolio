import React, { useState } from "react";

import "../../styles/toolkitcard.css";

function ToolkitCard({
  name,
  image,
  source_url,
  id,
  demo_example,
  description,
  tech,
}) {
  const [isModal, updateModal] = useState(false);

  const showModal = () => {
    updateModal(!isModal);
  };
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
            <button onClick={showModal}>About</button>

            <a href={source_url} target="_blank" rel="noopener noreferrer">
              <button>Source Code</button>
            </a>
          </div>
        </div>
      </div>

      {isModal ? (
        <div id="myModal" className="modal" onClick={showModal}>
          <div className="modal-content">
            <div className="exit">
              <span onClick={showModal} className="close">
                &times;
              </span>
            </div>
            <div className="info-area">
              <h1>Demo</h1>
              <img src={demo_example} alt="Demo not found"></img>
              <div className="description">
                <h3>About</h3>
                {description}
                <h3>Technologies</h3>
                <div className="tech">
                  {tech.map((item) => (
                    <img key={item} src={item} alt="Temporary"></img>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ToolkitCard;
