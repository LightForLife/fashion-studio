import React from 'react';
import {
  FooterSection,
  LogoContainer,
  FooterComponent,
  FooterBottom,
} from './Footer.styled';
import Logo from '../../assets/Svgs/star_white_48dp.svg';

const Footer = () => {
  return (
    <FooterSection>
      <LogoContainer>
        <img src={Logo} alt="Wibe Studio" />
        <h3>Wibe Studio</h3>
      </LogoContainer>
      <FooterComponent>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>shop</li>
          <li>new arrivals</li>
          <li>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              look book
            </a>
          </li>
          <li>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              reviews
            </a>
          </li>
        </ul>
        <FooterBottom>
          <span>&copy; {new Date().getFullYear()}. All Rights Reserved.</span>
          <span>
            Made with &hearts; by &nbsp;
            <a href="https://google.com" target="_blank" rel="noreferrer">
              Artur
            </a>
          </span>
        </FooterBottom>
      </FooterComponent>
    </FooterSection>
  );
};

export default Footer;
