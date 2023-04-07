import React from "react";
import hands from "./images/hands.png";

const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <div className="contact-left">
          <h3>Feel free to contact me!</h3>
          <p>gorkem.ater1@hotmail.com</p>
          <a target="_blank" href="https://github.com/Gorcc">
            <i class="fa-brands fa-github fa-2xl icon"></i>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/gorkemater/">
            <i class="fa-brands fa-linkedin fa-2xl icon"></i>
          </a>
        </div>
        <div className="contact-right">
          <img src={hands} alt="Contact Image" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
