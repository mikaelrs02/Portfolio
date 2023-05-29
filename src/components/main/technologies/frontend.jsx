import React from "react";
import * as S from "./technolgies_style";
import Css from "../../../image/css.png";
import Html from "../../../image/html.png";
import LReact from "../../../image/react.png";
import LStyled from "../../../image/styled-components.png";
import JavaScript from "../../../image/javascript.png";
export default function FrontEnd() {
  return (
    <S.Navigation>
      <S.Container>
        <S.BoxInfo>
          <img src={Html} alt="Html" />
          <S.P>Html5</S.P>
        </S.BoxInfo>
        <S.BoxInfo>
          <img src={Css} alt="Css" />
          <S.P>Css</S.P>
        </S.BoxInfo>
        <S.BoxInfo>
          <img src={JavaScript} alt="Js" />
          <S.P>JavaScript</S.P>
        </S.BoxInfo>
        <S.BoxInfo>
          <img src={LReact} alt="React" />
          <S.P>React</S.P>
        </S.BoxInfo>
        <S.BoxInfo>
          <img src={LStyled} alt="Styled-Components" />
          <S.P>Styled Components</S.P>
        </S.BoxInfo>
      </S.Container>
    </S.Navigation>
  );
}
