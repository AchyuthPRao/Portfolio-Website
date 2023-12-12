import './App.css';
import Landing from './components/Landing'
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Landing />
      <About/>
      <Projects />
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
