import React from "react";
import * as S from "./about_me_style";
import Photo from "../../../image/myphoto.png";
export default function AboutMe() {
  return (
    <>
      <S.AboutMe>
        <S.Title id="SobreMim">
          <h2> Sobre mim</h2>
        </S.Title>
        <S.PhotoBox>
          <S.Photo>
            <img src={Photo} alt="" />
          </S.Photo>
        </S.PhotoBox>
        <S.DescriptionAboutMe>
          <S.BoxAboutMe>
            <h2>Um pouco sobre mim</h2>
            <p>
              Me chamo Mikael Ribeiro, tenho 21 anos e estou cursando Ciencia da
              Computação na Unicarioca e estou no 3° periodo. Ao longo dos
              períodos, conheci a programação e tive o interesse de aprender
              mais, pude conhecer o VaiNaWeb que me ajudou muito na minha
              aprendizagem e no meu desenvolvimento. Além das linguagens de
              programação que o curso proporciona, procurei me aperfeiçoar em
              outras linguagens de programação. Hoje tenho que certeza que é a
              carreira que quero seguir, me desenvolvendo e aprendo todos os
              dias!
            </p>
          </S.BoxAboutMe>
        </S.DescriptionAboutMe>
      </S.AboutMe>
    </>
  );
}
