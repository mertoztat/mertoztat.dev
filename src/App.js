import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Personal from "./components/Personal";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-zinc-900">
      <Navbar />
      <Personal />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
