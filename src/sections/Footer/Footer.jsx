import React from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import {
  FooterSection,
  LogoContainer,
  FooterComponent,
  FooterBottom,
} from './Footer.styled';
import Logo from '../../assets/Svgs/star_white_48dp.svg';

const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = id => {
    let element = document.querySelector(id);

    scroll.scrollTo(element, {
      offset: '-10',
      duration: '2000',
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };
  return (
    <FooterSection>
      <LogoContainer>
        <img data-scroll data-scroll-speed="2" src={Logo} alt="Wibe Studio" />
        <h3 data-scroll data-scroll-speed="-1">
          Wibe Studio
        </h3>
      </LogoContainer>
      <FooterComponent
        initial={{ y: '-400px' }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
      >
        <ul>
          <li
            onClick={() => {
              handleScroll('#home');
            }}
          >
            home
          </li>
          <li
            onClick={() => {
              handleScroll('.about');
            }}
          >
            about
          </li>
          <li
            onClick={() => {
              handleScroll('#shop');
            }}
          >
            shop
          </li>
          <li
            onClick={() => {
              handleScroll('#new-arrival');
            }}
          >
            new arrivals
          </li>
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
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; {new Date().getFullYear()}. All Rights Reserved.
          </span>
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
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
