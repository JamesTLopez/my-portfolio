import React from "react";
import '../../styles/card.css'

function ProjectCard({ name, image, id ,hov,demo_url,about_url,source_url}) {
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
            <a href={demo_url}>
              <button className="but1">Demo</button>
            </a>
            </section>
            <section>
              <button className="but2">About</button>
            </section>
            <section>
              <a href={source_url}>
                <button className="but3">Source Code</button>
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
