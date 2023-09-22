import React from "react";
import "../style/Projects.css";
import deliveryAppScreenshot from "../images/delivery-app-screenshot.png"
import redirectIcon from "../images/redirect.svg"
import zooFunctionsScreenshot from "../images/zoo-Functions-snapcode.png"

export default function Projects() {
  return(
    <div className="container-projects" id="projects">
      <div className="banner-projects">
        <div className="project-title">
          <h1>Projetos</h1>
        </div>
        <div className="content-projects">
          <div class="card">
            <div className="card-image">
              <img src={deliveryAppScreenshot} alt="imagem projeto delivery"/>
            </div>
            <div class="card-description">
              <h3>Delivery App</h3>
              <p>Projeto de um site que simula um app de delivery (Garço.net).<br/>Sendo possivel realizar desde a compra como usuário, ate a administração dos pedidos.</p>
            </div>
            <div className="card-button">
            <a href="https://github.com/Ludoug-f/Project-delivery-app" target="_blank" rel="noreferrer">
              <span>Saber Mais</span>
                <img src={redirectIcon} alt="icone de redirecionamento"/>
            </a>
            </div>
          </div>
          <div class="card">
            <div className="card-image">
              <img src={zooFunctionsScreenshot} alt="imagem projeto delivery"/>
            </div>
            <div class="card-description">
              <h3>Zoo Functions</h3>
              <p>Lista de funçoes no JavaScript, simulando um sistema de gerenciamento de animais e funcionários de um zoológico</p>
            </div>
            <div className="card-button">
            <a href="https://github.com/Ludoug-f/Project-zoo-functions" target="_blank" rel="noreferrer">
              <span>Saber Mais</span>
                <img src={redirectIcon} alt="icone de redirecionamento"/>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}