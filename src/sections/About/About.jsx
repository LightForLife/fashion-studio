import React from 'react';
import { AboutSection, Left, Right } from './About.styled';
import { AboutTitle } from './About.styled';
import img1 from '../../assets/Images/1.webp';
import img2 from '../../assets/Images/2.webp';
import img3 from '../../assets/Images/3.webp';

const About = () => {
  return (
    <AboutSection id="fixed-target" className="about">
      <AboutTitle
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About As
      </AboutTitle>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        We're fashion studio based in california. We create unique designs that
        will blow your mind. We also design unique jewellery pieces. Fashion is
        an ART that can not be grasped by everyone.
        <br />
        <br /> We are very dedicated to making our products. We offer unique and
        creative products to a wide range of people. We have a variety of
        styles, but for most people, all of the options are in the box. We
        specialize in making things that make you happy.
        <br />
        <br />
        We strive to build on our vision. As a fashion label, we do our best to
        create amazing experiences for all people. We are always looking to make
        something that is easy for everyone.
      </Left>
      <Right>
        <img src={img1} alt="About Us" />
        <img
          data-scroll
          data-scroll-speed="5"
          src={img2}
          alt="About Us"
          className="small-img-1"
        />
        <img
          data-scroll
          data-scroll-speed="-2"
          src={img3}
          alt="About Us"
          className="small-img-2"
        />
      </Right>
    </AboutSection>
  );
};

export default About;
