import React from 'react';
import './App.css';
import NavMenu from './components/NavMenu';
import Opening from './components/Opening';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <header>
        <NavMenu />
      </header>
      <main>
        <Opening />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
