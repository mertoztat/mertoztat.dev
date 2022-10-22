import React from "react";
import Navbar from "./components/Navbar";
import Personal from "./components/Personal";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Phone from "./components/Phone";
import Web from "./components/Web";

const App = () => {
  return (
    <>
      <Navbar />
      <Personal />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Phone />
      <Contact />
    </>
  );
};

export default App;
