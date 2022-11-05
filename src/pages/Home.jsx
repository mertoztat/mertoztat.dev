import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Personal from "../components/Personal";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <Navbar />
      <Personal />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
