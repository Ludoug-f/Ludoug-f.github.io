import React from "react";
import "../style/About.css";
import Perfil from "../images/portfolio_perfil_canva.png"

export default function About() {
  return(
    <div className="container-about">
      <div className="banner-bio">
        <div className="row">
        <div className="profile-img">
          <img src={Perfil} alt="perfil_image"></img>
        </div>
        <div className="text-bio">
          <h1>Luciano Freitas</h1>
          <h2>Web Developer</h2>
          <p>
            Olá, seja bem-vindo! Agora vou compartilhar um pouco sobre mim.
            </p>
            <p>
            Me chamo Luciano, tenho 23 anos e sou de Contagem, na Região Metropolitana de Belo Horizonte, 
            em Minas Gerais. Como um grande entusiasta de jogos, sempre fui fascinado por tecnologia. 
            Durante a pandemia, participei de um hackathon e foi nesse momento que me aproximei da área de programação. 
            Em seguida, tive a oportunidade de me aprofundar e me tornar um desenvolvedor web por meio da Trybe. 
            Atualmente, estou em busca de uma oportunidade profissional na área. Estou empolgado para aplicar meus 
            conhecimentos como desenvolvedor web e contribuir para projetos desafiadores.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}