import React from "react";
import picture from "./images/picture.jpg";
import csharp from "./images/csharp.svg";
import unity from "./images/unity.svg";
import javascript from "./images/javscript.svg";
import css from "./images/css.svg";
import html from "./images/html.svg";
import scss from "./images/scss.svg";
import bootstrap from "./images/bootstrap.svg";
import reactsvg from "./images/react.svg";

const Body = () => {
  return (
    <div className="container">
      <div className="body-info">
        <img className="profilePicture" src={picture} alt="Profile picture" />
        <h1>
          Hi <span className="wave">👋</span>, I'm Deniz Görkem Ater
        </h1>
        <p>
          3rd-year computer engineering student with a passion for frontend
          development.
        </p>
        <div className="links">
          <a href="https://github.com/Gorcc" target="_blank">
            <i class="fa-brands fa-github fa-2xl icon"></i>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/gorkemater/">
            <i class="fa-brands fa-linkedin fa-2xl icon"></i>
          </a>
        </div>

        <div className="tech">
          <h3>Technologies</h3>
          <img src={html} alt="HTML" />
          <img src={css} alt="CSS" />
          <img src={javascript} alt="JavaScript" />
          <img src={reactsvg} alt="React" />
          <img src={bootstrap} alt="Bootstrap" />
          <img src={scss} alt="SCSS" />
          <img src={unity} alt="Unity" />
          <img src={csharp} alt="C#" />
        </div>
      </div>
    </div>
  );
};

export default Body;
