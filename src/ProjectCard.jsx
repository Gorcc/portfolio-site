import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <h2 className="card-title">{props.title}</h2>
      <iframe
        className="main-img"
        src={props.img}
        width="480"
        height="270"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>{props.desc}</p>
      <img className="tech-img" src={props.tech} alt="" />

      <div className="project-buttons">
        <a target="_blank" href={props.code}>
          <i class="fa-brands fa-github  project-icon"></i>
        </a>
        <a target="_blank" href={props.live}>
          <i class="fa-solid fa-laptop  project-icon "></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
