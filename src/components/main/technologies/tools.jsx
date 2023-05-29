import React from "react";
import * as S from "./technolgies_style";
import Github from "../../../image/github.png";
import Vscode from "../../../image/vscode.png";
import Terminal from "../../../image/terminal.png";
import CI from "../../../image/codelgniter.png";
export default function Tools() {
  return (
    <S.Navigation>
      <S.Container>
        <S.BoxInfo>
          <img src={Github} alt="GitHub" />
          <S.P>GitHub</S.P>
        </S.BoxInfo>
        <S.BoxInfo>
          <img src={Vscode} alt="Vscode" />
          <S.P>Vscode</S.P>
        </S.BoxInfo>
        <S.BoxInfo>
          <img src={Terminal} alt="Terminal" />
          <S.P>Terminal</S.P>
        </S.BoxInfo>
        <S.BoxInfo>
          <img src={CI} alt="Codeigniter" />
          <S.P>Codeigniter</S.P>
        </S.BoxInfo>
      </S.Container>
    </S.Navigation>
  );
}
