import React from "react";
import * as S from "./technolgies_style";
import MySQL from "../../../image/mysql.png";
import Oracle from "../../../image/oracle.png";
export default function DataBase() {
  return (
    <S.Navigation>
      <S.Container>
        <S.BoxInfo>
          <img src={MySQL} alt="MySQL" />
          <img src={Oracle} alt="Oracle" />
        </S.BoxInfo>
      </S.Container>
    </S.Navigation>
  );
}
