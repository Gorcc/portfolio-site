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
          href="https://cdn.discordapp.com/attachments/336171716126572548/1206362128915894272/GorkemAter_-_CVFinal.pdf?ex=65dbbb48&is=65c94648&hm=102911ee65985b17153fdaf78ccd5d8dedc693208ac0cf71555a1c0c554880b3&"
          className="cv"
        >
          CV ↓
        </a>
      </div>
    </div>
  );
};

export default Contact;
