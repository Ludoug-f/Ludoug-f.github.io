import React from "react";
import "../style/Sobre.css";

export default function Sobre() {
  return(
    <div class="sobre">
       <div className="container">
        <div className="static">Seja bem vindo, eu sou</div>
        <ol className="dinamic">
          <li><span className="typing-animation">Luciano Freitas</span></li>
          <li><span className="typing-animation">Web Developer</span></li>
        </ol>
       </div>
    </div>
  );
}