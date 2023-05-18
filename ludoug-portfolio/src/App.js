import React from 'react';
import './App.css';
import NavMenu from './components/NavMenu';
import Sobre from './components/Sobre';
import Skills from './components/Skills';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <NavMenu />
      </header>
      <main>
        <Sobre />
        <Skills />
        <Projetos />
        <Contato />
      </main>
        <Footer />
    </div>
  );
}

export default App;
