import React from 'react';
import { HomeSection } from './Home.styled';
import CoverVideo from 'components/CoverVideo/CoverVideo';
import Logo from 'components/Logo/Logo';

const Home = () => {
  return (
    <HomeSection>
      <CoverVideo />
      <Logo />
      <h1>NavBar</h1>
    </HomeSection>
  );
};

export default Home;
