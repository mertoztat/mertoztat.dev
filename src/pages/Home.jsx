import Navbar from "../components/Navbar";
import Personal from "../components/Personal";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

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
