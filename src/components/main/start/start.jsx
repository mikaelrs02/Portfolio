import React from "react";
import * as S from "./start_style";
import GitHub from "../../../image/github.png";
import GmailBlack from "../../../image/gmail.png";
import InstaBlack from "../../../image/instagram.png";
import LinkedinBlack from "../../../image/linkedin.png";

export default function Start() {
  return (
    <>
      <S.BoxStart id="InicioMain">
        <S.Description>
          <S.MasterBox>
            <S.WritingBox>
              <S.Writing>
                <h1>Olá, meu nome é Mikael</h1>
              </S.Writing>
              <S.H3>
                <h3>
                  Sou Desenvolvedor Front-End/Full-Stack. Atualmente trabalho na
                  News Systems
                </h3>
              </S.H3>
              <S.ImageBox>
                <a
                  href="https://www.linkedin.com/in/mikael-ribeiro-6a262220b/"
                  target="blank"
                >
                  <img src={LinkedinBlack} alt="Linkedin" />
                </a>
                <a href="https://github.com/" target="blank">
                  <img src={GmailBlack} alt="Gmail" />
                </a>
                <a
                  href="https://www.instagram.com/mikaelribeiro02/"
                  target="blank"
                >
                  <img src={InstaBlack} alt="Instagram" />
                </a>
                <a href="https://github.com/mikaelrs02" target="blank">
                  <img src={GitHub} alt="GitHub" />
                </a>
              </S.ImageBox>
            </S.WritingBox>
          </S.MasterBox>
        </S.Description>
      </S.BoxStart>
    </>
  );
}
