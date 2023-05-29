import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Calculadora from "../../../image/calculadora.png";
import Camisa from "../../../image/camisa.png";
import CopadoMundo from "../../../image/copadomundo.png";
import DellMovies from "../../../image/dellmovies.png";
import Horti from "../../../image/horti.png";
import JogodaVelha from "../../../image/jogodavelha.png";
import Laranja from "../../../image/laranja.png";
import PepsiPage from "../../../image/pepsipage.png";
import Rick from "../../../image/rick.png";
import Fundo from "../../../image/fundo.png";
import styled from "styled-components";

const BoxCarousel = styled.section`
  background-image: url(${Fundo});
  height: 90vh;
  font-family: "Poppins", sans-serif;
`;
const Title = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  color: #ffffff;
`;
const breakPoints = [{ width: 1200, itemsToShow: 2 }];
const Container = styled.section`
  height: 65vh;
  display: flex;
  align-items: flex-end;
  button {
    display: flex;
    justify-content: center;
    border: solid black;
    background-color: #ffffff;
  }
`;

const Img = styled.img`
  height: 40vh;
`;

export default function App() {
  return (
    <BoxCarousel id="Projetos">
      <Title>
        <h2>Projetos</h2>
      </Title>
      <Container>
        <Carousel breakPoints={breakPoints}>
          <a
            href="https://calculator-react-k98ebu50p-mikaelrs02.vercel.app/"
            target="blank"
          >
            <Img src={Calculadora} alt="" />
          </a>
          <a
            href="https://jogo-da-velha-herc5987m-mikaelrs02.vercel.app/"
            target="blank"
          >
            <Img src={JogodaVelha} alt="" />
          </a>
          <a
            href="https://pepsi-soda-page-7kj5klkwz-mikaelrs02.vercel.app/"
            target="blank"
          >
            <Img src={PepsiPage} alt="" />
          </a>
          <a
            href="https://dell-movies-6jco46v1j-mikaelrs02.vercel.app/"
            target="blank"
          >
            <Img src={DellMovies} alt="" />
          </a>
          <a href="https://rick-and-morty-3ys5ec4gl-mikaelrs02.vercel.app/">
            <Img src={Rick} alt="" />
          </a>
          <a
            href="https://github.com/mikaelrs02/Contador_Camisa_VNW/deployments/activity_log?environment=Production"
            target="blank"
          >
            <Img src={Camisa} alt="" />
          </a>
          <a
            href="https://mikaelrs02.github.io/Copa-do-Mundo-VNW/"
            target="blank"
          >
            <Img src={CopadoMundo} alt="" />
          </a>
          <a
            href="https://github.com/mikaelrs02/Portflow_VNW/deployments/activity_log?environment=github-pages"
            target="blank"
          >
            <Img src={Laranja} alt="" />
          </a>
          <a href="">
            <Img src={Horti} alt="" />
          </a>
        </Carousel>
      </Container>
    </BoxCarousel>
  );
}
