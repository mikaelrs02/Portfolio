import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
`;

export const Navigation = styled.header`
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    width: 45vh;
    height: 25vh;
  }
  ul {
    display: flex;
    justify-content: space-around;
    width: 65%;
    position: relative;
    top: 6px;
  }
  li {
    font-family: "Poppins", sans-serif;
    background-color: #000000;
    width: 21vh;
    height: 6vh;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
      color: #ffd9f4;
      transition: 0.3s;
      transform: scale(1.1);
    }
    a {
      color: #ffffff;
    }
  }
`;
