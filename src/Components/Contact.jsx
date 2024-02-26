import React from "react";
import "../Styles/contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Feel free to contact me! 💻</h1>
      <div className="links">
        <a
          href="https://github.com/Gorcc"
          target="_blank"
          className="social-link"
        >
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/gorkemater/"
          className="social-link"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
      </div>
      <div className="mail-cv">
        <a href="mailto:gorkem.ater1@gmail.com">
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          gorkem.ater1@gmail.com
        </a>
        <a
        target="blank"
          href="https://cdn.jsdelivr.net/gh/Gorcc/cdn@main/port-site/GörkemAter%20-%20CVFinal%20(1).pdf"
          className="cv"
        >
          Resume ↓
        </a>
      </div>
    </div>
  );
};

export default Contact;
