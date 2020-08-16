import React from "react";
import {Frontend} from "../../images/images"

function About() {
  return (
    <div className="title-content">
      <div className="about-content">
        <div className="picture">
            <img src={Frontend} alt="Frontend"></img>
        </div>
        <div className="about">
          <p>
            I am a Computer Scientist, graduated at University of Windsor and
            currently still located in Windsor Ontario. Web development has
            always been the most enjoyable aspect during my 4 year education at
            the University and with my self taughts skill in design using
            software such as <a style={{color:"#ED91F6"}} href="https://affinity.serif.com/en-gb/photo/">Affinity Photo</a> and <a style={{color:"#53D0F7"}} href="https://affinity.serif.com/en-gb/designer/">Affinity Designer</a>, I believe I would be a
            great assest to any employer in the field, especially with front-end
            development. I am currently pursing an opportunity to development my
            skills and potentially could help others develop theirs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
