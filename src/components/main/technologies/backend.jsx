import React from "react";
import * as S from "./technolgies_style";
import PHP from "../../../image/php.png";
export default function BackEnd() {
  return (
    <S.Navigation>
      <S.Container>
        <S.BoxInfo>
          <img src={PHP} alt="PHP" />
        </S.BoxInfo>
      </S.Container>
    </S.Navigation>
  );
}
