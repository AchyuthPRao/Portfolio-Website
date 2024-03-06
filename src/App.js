import "./App.css";
import Landing from "./components/Landing";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Landing />
      <Skills />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
