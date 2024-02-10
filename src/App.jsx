import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Socials />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
