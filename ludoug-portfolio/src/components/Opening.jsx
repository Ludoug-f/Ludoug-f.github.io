import React from "react";
import "../style/Opening.css";

export default function Opening() {
  return(
    <div class="opening" id="home">
       <div className="container-opening">
        <div className="static">Seja bem vindo, eu sou</div>
        <ol className="dinamic">
          <li><span className="typing-animation">Luciano Freitas</span></li>
          <li><span className="typing-animation">Web Developer</span></li>
        </ol>
       </div>
    </div>
  );
}