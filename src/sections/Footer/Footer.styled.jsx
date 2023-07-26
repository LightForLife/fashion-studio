import styled from 'styled-components';

export const FooterSection = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};

  position: relative;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }

  h3 {
    font-family: 'Kaushan Script';
    font-size: ${props => props.theme.fontxl};
  }
`;

export const FooterComponent = styled.footer`
  width: 80vw;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1 rem;
    border-top: 1px solid ${props => props.theme.text};
    border-bottom: 1px solid ${props => props.theme.text};
  }

  li {
    padding: 2rem;
    font-size: ${props => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const FooterBottom = styled.div`
  padding: 0.5rem 0;
  margin: 0.4rem;
  font-size: ${props => props.theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }
`;
