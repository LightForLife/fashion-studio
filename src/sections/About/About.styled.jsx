import styled from 'styled-components';

export const AboutSection = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  /* overflow: hidden; */

  display: flex;

  margin: 0 auto;
`;

export const AboutTitle = styled.h1`
  font-size: ${props => props.theme.fontBig};
  font-family: 'Kaushan Script';
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;

export const Left = styled.div`
  width: 50%;
  font-size: ${props => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;
`;

export const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;

    position: absolute;
    right: 95%;
    bottom: 10%;
  }

  .small-img-2 {
    width: 40%;

    position: absolute;
    left: 80%;
    bottom: 30%;
  }
`;
