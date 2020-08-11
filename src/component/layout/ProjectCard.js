import React from "react";
import '../../styles/card.css'

function ProjectCard({ name, image, id ,hov}) {
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
              <button className="but1">Demo</button>
            </section>
            <section>
              <button className="but2">About</button>
            </section>
            <section>
              <button className="but3">Source Code</button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
