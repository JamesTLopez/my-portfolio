import React, { useState } from "react";
import "../../styles/card.css";

function ProjectCard({
  name,
  image,
  id,
  hov,
  demo_url,
  source_url,
  demo_example,
  description,
  tech,
}) {
  const [isModal, updateModal] = useState(false);

  const showModal = () => {
    updateModal(!isModal);
  };

  return (
    <div className="card-container">
      <div className={`card ${hov}`}>
        <div className="image-box">
          <img id={id} src={image} alt={id} />
        </div>
        <div className="content-box">
          <p>{name}</p>
          <div className="button-group">
            <section>
              <button onClick={showModal} className="but2">
                About
              </button>
            </section>
            <section>
              <a href={demo_url} alt="Not available" target="_blank" rel="noopener noreferrer">
                <button className="but1">Demo</button>
              </a>
            </section>
            <section>
              <a href={source_url} alt="Not available" target="_blank" rel="noopener noreferrer">
                <button className="but3">Source Code</button>
              </a>
            </section>
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

export default ProjectCard;
