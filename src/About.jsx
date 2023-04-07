import aboutImg from "./images/aboutimg.png";
import aboutImg2 from "./images/aboutimg2.png";
import React, { useState } from "react";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-left">
          <img className="about-img" src={aboutImg} alt="About Image" />
        </div>
        <div className="about-right">
          <h1>About</h1>
          <p>
            Hello, I am Görkem currently studying at Eastern Mediterranean
            University as a Computer Engineer, I am very interested in web
            design and user experience concepts, and I am looking for an
            internship opportunity where I can make more applications and
            improve myself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
