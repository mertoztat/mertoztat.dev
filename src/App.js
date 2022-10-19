import React from "react";
import Navbar from "./components/Navbar";
import Personal from "./components/Personal";
import About from "./components/About";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Personal />
      <About />
      <Skills />
    </>
  );
};

export default App;
