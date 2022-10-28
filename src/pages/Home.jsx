import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Personal from "../components/Personal";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-zinc-900">
      <Navbar />
      <Personal />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
