import React from "react";
import "./styles.css";
import About from "./About";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>gorcc.dev</h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <a href="About">About</a>
          </li>
          <li>
            <a href="Projects">Projects</a>
          </li>
          <li>
            <a href="Contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
