import React, { useState } from "react";
import "../Styles/projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("web");
  
  const projects = [
    {
      category: "web",
      name: "Social App",
      imgSrc: "https://cdn.jsdelivr.net/gh/Gorcc/cdn@main/port-site/socialapp.png",
      description: "Developed a full-stack social media application with features like registering, editing your profile, following people, sharing posts with images, chatting and more.",
      techStack: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next","Supabase"],
      githubLink: "https://github.com/Gorcc/social-app",
      liveDemoLink: "https://social-app-gorcc.vercel.app"
    },
    {
      category: "web",
      name: "Arkhio",
      imgSrc: "https://cdn.jsdelivr.net/gh/Gorcc/cdn@main/port-site/arkhio.png",
      description: "Developed a library for web developers, where you can find UI, Design, Icon inspiration and Code related websites. You can sign up and log in to add websites as your favorites.",
      techStack: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next","Supabase"],
      githubLink: "https://github.com/Gorcc/arkhio",
      liveDemoLink: "https://arkhio-nine.vercel.app"
    },
    {
      category: "web",
      name: "Sumarizzer",
      imgSrc: "https://cdn.jsdelivr.net/gh/Gorcc/cdn@main/port-site/resim_2024-03-06_173551931.png",
      description: "A summarizer app with help of AI, summarizes articles to save time.",
      techStack: ["HTML", "CSS", "JavaScript", "React"],
      githubLink: "https://github.com/Gorcc/sumarizzer",
      liveDemoLink: "https://sumarizzer.vercel.app"
    },
    {
      category: "web",
      name: "Moviezone",
      imgSrc: "https://user-images.githubusercontent.com/83879860/229380472-ff692fb9-0249-451b-a4ea-6307546abf56.png",
      description: "A movie search app with help of OMDb API, you can search movies and learn information about them.",
      techStack: ["HTML", "CSS", "JavaScript", "React"],
      githubLink: "https://github.com/Gorcc/moviezone",
      liveDemoLink: "https://moviezone-sand.vercel.app"
    },
    
    
    {
      category: "freelance",
      name: "Team Sly",
      imgSrc: "https://cdn.jsdelivr.net/gh/Gorcc/cdn@main/port-site/sly.png",
      description: "Team Sly is a freelance work I did. I learned a lot about optimization and SEO on this project.",
      techStack: ["HTML", "CSS", "JavaScript", "React"],
      githubLink: "https://github.com/Gorcc/sly-team",
      liveDemoLink: "https://www.teamsly.net"
    },
    {
      category: "freelance",
      name: "Roan Cloud",
      imgSrc: "https://cdn.jsdelivr.net/gh/Gorcc/cdn@main/port-site/roancloud.png",
      description: "Roan Cloud is another freelance work. This project was a urgent project and was completed in one day.",
      techStack: ["HTML", "CSS", "JavaScript", "React","Bootstrap"],
     
      liveDemoLink: "https://roanclouds.com"
    },
    {
      category: "freelance",
      name: "K / M Estates",
      imgSrc: "https://cdn.jsdelivr.net/gh/Gorcc/cdn@main/port-site/kmestates.png",
      description: "K/M Estates is a project for a cyprus based real estate company. It includes all information about the properties and projects.",
      techStack: ["HTML", "CSS", "JavaScript", "React","Bootstrap"],
     
      liveDemoLink: "https://www.kmrealestates.homes"
    },
    {
      category: "game",
      name: "Crazy Highway",
      imgSrc: "https://cdn.jsdelivr.net/gh/Gorcc/cdn@main/port-site/crazyhighway.png",
      description: "Crazy Highway is a Unity game I developed back when I was learning about game development. This was my first game.",
      techStack: ["C#", "Unity"],
      githubLink: "https://github.com/Gorcc/crazy-highway-scripts",
      liveDemoLink: "https://gorcc.itch.io/crazy-highway"
    }
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filteredProjects = projects.filter((project) => {
    return project.category === activeCategory;
  });

  return (
    <div className="projects-container">
      <h2 className="project-header">Projects</h2>
      <p className="p-1">Here's some of my work!</p>
      <div className="project-buttons">
        <button className={activeCategory === "web" ? "active" : ""} onClick={() => handleCategoryClick("web")}>Web Projects</button>
        <button className={activeCategory === "freelance" ? "active" : ""} onClick={() => handleCategoryClick("freelance")}>Freelance Work</button>
        <button className={activeCategory === "game" ? "active" : ""} onClick={() => handleCategoryClick("game")}>Game Projects</button>

      </div>
      {filteredProjects.map((project, index) => (
        <div className="project" key={index}>
          <a href={project.liveDemoLink} target="_blank">
            <img className="project-img" src={project.imgSrc} alt={project.name} />
          </a>
          <div className="project-desc">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.techStack.map((tech, index) => (
                <img src={`https://skillicons.dev/icons?i=${tech.toLowerCase()}`} alt={tech} key={index} />
              ))}
            </div>
            <div className="code-live">
             {project.githubLink ? <a href={project.githubLink} target="_blank">
                GitHub <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </a> : "" } 
              <a href={project.liveDemoLink} target="_blank">
                Live Demo{" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare}></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
