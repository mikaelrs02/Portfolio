import styled from "styled-components";
import Fundo from "../../../image/fundo.png";

export const BoxStart = styled.section`
  background-image: url(${Fundo});
  background-repeat: no-repeat;
  height: 90vh;
`;
export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MasterBox = styled.div`
  height: 90vh;
  width: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const WritingBox = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  width: 90vh;
  height: 60vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const Writing = styled.div`
  h1 {
    font-family: "Poppins", sans-serif;
    color: #000000;
    font-size: 2rem;
  }
`;
export const H3 = styled.h3`
  h3 {
    font-family: "Poppins", sans-serif;
    color: #000000;
    width: 70vh;
  }
`;
export const ImageBox = styled.div`
  height: 9vh;
  width: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
