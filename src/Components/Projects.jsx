import React from "react";
import "../Styles/projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="project-header">Projects</h2>
      <p className="p-1">Here's some of my work!</p>
      <div className="project">
        <a href="https://social-app-gorcc.vercel.app" target="_blank">
          <img
            src="https://cdn.jsdelivr.net/gh/Gorcc/cdn@main/port-site/socialapp.png"
            alt=""
          />
        </a>
        <div className="project-desc">
          <h2>Social App</h2>
          <p>
            {" "}
            Developed a full-stack soical media application with features like
            registering, editing your profile, following people, sharing posts
            with images, chatting and more.{" "}
          </p>
          <div className="project-tech">
            <img src="https://skillicons.dev/icons?i=html" alt="" />
            <img src="https://skillicons.dev/icons?i=css" alt="" />
            <img src="https://skillicons.dev/icons?i=javascript" alt="" />
            <img src="https://skillicons.dev/icons?i=typescript" alt="" />
            <img src="https://skillicons.dev/icons?i=react" alt="" />
            <img src="https://skillicons.dev/icons?i=next" alt="" />
          </div>
          <div className="code-live">
            <a href="https://github.com/Gorcc/social-app" target="_blank">
              GitHub <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
            <a href="https://social-app-gorcc.vercel.app" target="_blank">
              Live Demo{" "}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
      <div className="project">
        <a href="https://arkhio-nine.vercel.app" target="_blank">
          <img
            src="https://cdn.jsdelivr.net/gh/Gorcc/cdn@main/port-site/arkhio.png"
            alt=""
          />
        </a>
        <div className="project-desc">
          <h2>Arkhio</h2>
          <p>
            {" "}
            Developed a library for web developers, where you can find
            UI,Design,Icon inspiration and Code releated websites, you can sign
            up and log in to add websites as your favorites.
          </p>
          <div className="project-tech">
            <img src="https://skillicons.dev/icons?i=html" alt="" />
            <img src="https://skillicons.dev/icons?i=css" alt="" />
            <img src="https://skillicons.dev/icons?i=javascript" alt="" />
            <img src="https://skillicons.dev/icons?i=typescript" alt="" />
            <img src="https://skillicons.dev/icons?i=react" alt="" />
            <img src="https://skillicons.dev/icons?i=next" alt="" />
          </div>
          <div className="code-live">
            <a href="https://github.com/Gorcc/arkhio" target="_blank">
              GitHub <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
            <a href="https://arkhio-nine.vercel.app" target="_blank">
              Live Demo{" "}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
      <div className="project">
        <a href="https://www.teamsly.net" target="_blank">
          <img
            src="https://cdn.jsdelivr.net/gh/Gorcc/cdn@main/port-site/sly.png"
            alt=""
          />
        </a>
        <div className="project-desc">
          <h2>Team Sly</h2>
          <p>
            {" "}
            Team Sly is a freelance work i did. I learned a lot about
            optimization and SEO on this project.
          </p>
          <div className="project-tech">
            <img src="https://skillicons.dev/icons?i=html" alt="" />
            <img src="https://skillicons.dev/icons?i=css" alt="" />
            <img src="https://skillicons.dev/icons?i=javascript" alt="" />

            <img src="https://skillicons.dev/icons?i=react" alt="" />
          </div>
          <div className="code-live">
            <a href="https://github.com/Gorcc/sly-team" target="_blank">
              GitHub <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
            <a href="https://www.teamsly.net" target="_blank">
              Live Demo{" "}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
      <div className="project">
        <a href="https://gorcc.itch.io/crazy-highway" target="_blank">
          <img
            src="https://cdn.jsdelivr.net/gh/Gorcc/cdn@main/port-site/crazyhighway.png"
            alt=""
          />
        </a>
        <div className="project-desc">
          <h2>Crazy Highway</h2>
          <p>
            {" "}
            Crazy Highway is a Unity game i developed back when i was learning
            about game development. This was my first game.
          </p>
          <div className="project-tech">
            <img src="https://skillicons.dev/icons?i=cs" alt="" />
            <img src="https://skillicons.dev/icons?i=unity" alt="" />
          </div>
          <div className="code-live">
            <a
              href="https://github.com/Gorcc/crazy-highway-scripts"
              target="_blank"
            >
              GitHub <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
            <a href="https://gorcc.itch.io/crazy-highway" target="_blank">
              Live Demo{" "}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
