import React from "react";
import * as S from "./footer_style";
import GitHub from "../../image/github.png";
import GmailBlack from "../../image/gmail.png";
import InstaBlack from "../../image/instagram.png";
import LinkedinBlack from "../../image/linkedin.png";
export default function Footer() {
  return (
    <>
      <S.Contatos id="Agradecimentos">
        <h2>Agradecimentos</h2>

        <S.Agradecimentos>
          <h2>
            Agradeço ao VaiNaWeb por me monstrar o caminho que quero seguir pra
            minha vida, Agradeço a todos da equipe, mas principalmente a Karine
            e o Brendon que me deram apoio e o insetivo pra não desisti em
            nenhum momento do curso
          </h2>
        </S.Agradecimentos>

        <S.LogosContatos>
          <a
            href="https://www.linkedin.com/in/mikael-ribeiro-6a262220b/"
            target="blank"
          >
            <img src={LinkedinBlack} alt="Linkedin" />
          </a>
          <a
            href="https://www.linkedin.com/in/mikael-ribeiro-6a262220b/"
            target="blank"
          >
            <img src={GmailBlack} alt="Linkedin" />
          </a>
          <a href="https://www.instagram.com/mikaelribeiro02/" target="blank">
            <img src={InstaBlack} alt="Linkedin" />
          </a>
          <a href="https://github.com/mikaelrs02" target="blank">
            <img src={GitHub} alt="Linkedin" />
          </a>
        </S.LogosContatos>
      </S.Contatos>
    </>
  );
}
