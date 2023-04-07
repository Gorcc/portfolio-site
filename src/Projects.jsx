import React from "react";
import ProjectCard from "./ProjectCard";
import csharp from "./images/csharp.svg";
import unity from "./images/unity.svg";
import javascript from "./images/javscript.svg";
import css from "./images/css.svg";
import html from "./images/html.svg";
import scss from "./images/scss.svg";
import bootstrap from "./images/bootstrap.svg";
import reactsvg from "./images/react.svg";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="cards">
        <ProjectCard
          title="Moviezone"
          img="https://giphy.com/embed/YTHsCCa9e3GslJOhbJ"
          desc="Moviezone is a simple movie search app made in React, it uses Omdb API to find the movies."
          tech={reactsvg}
          code="https://github.com/Gorcc/moviezone"
          live="https://moviezone-sand.vercel.app"
        />
        <ProjectCard
          title="Keeper"
          img="https://giphy.com/embed/xkTwCBHxE9PLczIZsY"
          desc="Keeper is a app for taking notes, keep your notes with Keeper"
          tech={reactsvg}
          code="https://github.com/Gorcc/keeper-app"
          live="https://keeper-app-brown.vercel.app"
        />
        <ProjectCard
          title="Crazy Highway!"
          img="https://giphy.com/embed/dbhs8MhbOxmzjK2CBv"
          desc="Crazy Highway was a hobby project made in C# and Unity"
          tech={csharp}
          code="https://github.com/Gorcc/crazy-highway-scripts"
          live="https://gorcc.itch.io/crazy-highway"
        />
      </div>
    </div>
  );
};

export default Projects;
