import React from 'react';
import { HomeSection } from './Home.styled';
import CoverVideo from 'components/CoverVideo/CoverVideo';
import Logo from 'components/Logo/Logo';
import NavBar from 'components/NavBar/NavBar';

const Home = () => {
  return (
    <HomeSection>
      <CoverVideo />
      <Logo />
      <NavBar />
    </HomeSection>
  );
};

export default Home;
