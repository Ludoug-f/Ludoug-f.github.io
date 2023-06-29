import React from "react";
import "../style/About.css";
import Perfil from "../images/portfolio_perfil_canva.png"

export default function About() {
  return(
    <div>
      <p>imagem perfil</p>
        <img src={Perfil} alt="perfil_image"></img>
    </div>
  );
}