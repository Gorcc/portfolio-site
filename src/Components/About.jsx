import React from "react";
import "../Styles/about.scss";
import aboutImg from "../Assets/Open Peeps - Bust.png";
import aboutImg2 from "../Assets/openpeeps2.png";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-wrap">
        <div className="about-left">
          <h2>About Me</h2>
          <p>
            Hello!, I'm Deniz Görkem. 4th year Computer Engineering student studying in
            North Cyprus. I am passionate about Software Development and worked
            mostly on <strong>Front-end (React)</strong> field. I'm also
            familliar with backend technologies and Game Development technologies like Node.js and C#.
          </p>
          <div className="fields">
            <p>Tech Stack</p>
            <img src="https://skillicons.dev/icons?i=html" alt="" />
            <img src="https://skillicons.dev/icons?i=css" alt="" />
            <img src="https://skillicons.dev/icons?i=javascript" alt="" />
            <img src="https://skillicons.dev/icons?i=typescript" alt="" />
            <img src="https://skillicons.dev/icons?i=react" alt="" />
            <img src="https://skillicons.dev/icons?i=next" alt="" />
            <img src="https://skillicons.dev/icons?i=nodejs" alt="" />
            <img src="https://skillicons.dev/icons?i=sass" alt="" />
            <img src="https://skillicons.dev/icons?i=tailwind" alt="" />

            <img src="https://skillicons.dev/icons?i=cs" alt="" />
          </div>
        </div>
        <div className="about-right">
          <img src={aboutImg} alt="About" className="img1" />
        </div>
      </div>
    </div>
  );
};

export default About;
