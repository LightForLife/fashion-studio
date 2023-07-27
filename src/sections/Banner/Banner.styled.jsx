import styled from 'styled-components';

export const BannerSection = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  @media (max-width: 48em) {
    width: 90vw;
  }
`;

export const BannerContainer = styled.div`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 64em) {
    justify-content: center;
  }
`;

export const BannerComponent = styled.h1`
  font-size: ${props => props.theme.fontxxxl};
  font-family: 'Kaushan Script';

  color: ${props => props.theme.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;

  @media (max-width: 70em) {
    font-size: ${props => props.theme.fontxxl};
  }
  @media (max-width: 64em) {
    margin: 1rem 0;
  }
  @media (max-width: 48em) {
    margin: 0.5rem 0;
    font-size: ${props => props.theme.fontlg};
  }
  @media (max-width: 30em) {
    font-size: ${props => props.theme.fontmd};
  }

  span {
    display: block;
    background-color: ${props => props.theme.body};
    padding: 1rem 2rem;
  }
`;
