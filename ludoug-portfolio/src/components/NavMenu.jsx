import React from "react";
import "../style/NavMenu.css";

export default function NavMenu() {
return (
    <nav className="nav-menu">
        <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
        </ul>
    </nav>
  );
}