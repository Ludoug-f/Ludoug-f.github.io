import React from "react";
import "../style/Sobre.css";

export default function Sobre() {
  return(
    <div class="sobre">
       <div className="container">
        <div className="estatico">Seja bem vindo, eu sou</div>
        <ol className="dinamico">
          <li><span>Luciano Freitas</span></li>
          <li><span>Web Developer</span></li>
        </ol>
       </div>
    </div>
  );
}