import './App.css';
import './components/About'
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  );
}

export default App;