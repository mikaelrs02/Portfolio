import styled from "styled-components";
export const AboutMe = styled.section``;

export const Title = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25vh;
  font-size: 1.5rem;
`;
export const Photo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 60%;
    width: 300px;
    height: 300px;
  }
`;
export const PhotoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35vh;
`;

export const DescriptionAboutMe = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    height: 10vh;
    display: flex;
    align-items: center;
  }
`;
export const BoxAboutMe = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 190vh;
  h2 {
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }
  p {
    font-size: 1.2rem;
  }
`;
