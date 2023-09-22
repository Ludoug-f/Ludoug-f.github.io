import React from "react";
import "../style/Footer.css";
import Github from "../images/github.svg"
import Linkedin from "../images/linkedin.svg"
import Email from "../images/mail.svg"
import Instagram from "../images/instagram.svg"

export default function Footer() {
  return (
    <footer>
      <div class="footer" id="contact">
      <p>Contatos</p>
        <div class="row">
          <a href="https://github.com/Ludoug-f" target="_blank" rel="noreferrer">
            <img src={Github} alt="icone Github"/>
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/luciano-f/" target="_blank" rel="noreferrer">
            <img src={Linkedin} alt="icone Linkedin"/>
            <span>Linkedin</span>
          </a>
          <a href="mailto: lucianofreitasngc@gmail.com" target="_blank" rel="noreferrer">
            <img src={Email} alt="icone Email"/>
            <span>Email</span>
          </a>
          <a href="https://www.instagram.com/ludoug_/" target="_blank" rel="noreferrer">
            <img src={Instagram} alt="icone Instagram"/>
            <span>Instagram</span>
          </a>
        </div>
        <div class="row">
          Designed by: Luciano Freitas
        </div>
      </div>
    </footer>
  );
}
