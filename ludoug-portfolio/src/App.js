import React from 'react';
import './App.css';
import NavMenu from './components/NavMenu';
import Opening from './components/Opening';
import Skills from './components/Skills';
import Projects from './components/Projects';
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
      </main>
      <footer>
        <Footer />
      </footer>
        <script src="/path/to/flickity.pkgd.min.js"></script>
    </div>
  );
}

export default App;
