import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Personal from "./components/Personal";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-zinc-900">
      <Routes>
        <Route path="/*" element={<Navbar />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="personal" element={<Personal />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
