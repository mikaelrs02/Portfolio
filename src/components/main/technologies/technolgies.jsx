import React from "react";
import { Link } from "react-router-dom";
import * as S from "./technolgies_style.jsx";
import BackEnd from "../../../image/back-end.png";
import DataBase from "../../../image/database.png";
import FrontEnd from "../../../image/front-end.png";
import Tools from "../../../image/tools.png";
export default function Technolgies() {
  return (
    <>
      <S.Technolgies id="Tecnologias">
        <h2>Tecnologias</h2>
      </S.Technolgies>
      <S.Navigation>
        <S.Ul>
          <S.List>
            <img src={FrontEnd} alt="" />
            <Link to="/">
              <S.H3>FrontEnd</S.H3>
            </Link>
          </S.List>
          <S.List>
            <img src={BackEnd} alt="" />
            <Link to="/BackEnd">
              <S.H3>BackEnd</S.H3>
            </Link>
          </S.List>
          <S.List>
            <img src={DataBase} alt="" />
            <Link to="/BDados">
              <S.H3>Data Base</S.H3>
            </Link>
          </S.List>
          <S.List>
            <img src={Tools} alt="" />
            <Link to="/Tools">
              <S.H3>Tools</S.H3>
            </Link>
          </S.List>
        </S.Ul>
      </S.Navigation>
    </>
  );
}
