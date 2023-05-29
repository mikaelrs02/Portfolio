import React from "react";
import * as S from "./header_style";
import Logo from "../../image/logowhite.png";
export default function Header() {
  return (
    <S.Navigation>
      <img src={Logo} alt="Logo" />
      <ul>
        <li>
          <a href="#InicioMain">Inicio</a>
        </li>
        <li>
          <a href="#SobreMim"> Sobre</a>
        </li>
        <li>
          <a href="#Tecnologias">Tecnologias</a>
        </li>
        <li>
          <a href="#Projetos">Projetos </a>
        </li>
        <li>
          <a href="#Agradecimentos">Agradecimentos </a>
        </li>
      </ul>
    </S.Navigation>
  );
}
