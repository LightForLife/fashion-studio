import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ShopSection = styled.section`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  margin: 0 auto;

  position: relative;
`;

export const ShopTitle = styled.h1`
  font-size: ${props => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  font-weight: 300;

  text-shadow: 1px 1px 1px ${props => props.theme.body};
  color: ${props => props.theme.text};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${props => props.theme.fontxxl};
  }

  @media (max-width: 48em) {
    font-size: ${props => props.theme.fontxl};
  }
`;

export const Left = styled.div`
  width: 35%;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};

  min-height: 100vh;
  z-index: 5;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${props => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${props => props.theme.fontsm};
    }
  }

  @media (max-width: 30em) {
    p {
      font-size: ${props => props.theme.fontxs};
    }
  }
`;

export const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;
  background-color: ${props => props.theme.grey};
  /* width: 65%; */

  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

export const Item = styled(motion.div)`
  width: 19rem;
  margin-right: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;
