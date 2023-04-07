import logo from "./logo.svg";
import React from "react";
import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Body />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
