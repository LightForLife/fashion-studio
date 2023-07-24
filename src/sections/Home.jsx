import React from 'react';
import { HomeSection } from './Home.styled';
import CoverVideo from 'components/CoverVideo/CoverVideo';

const Home = () => {
  return (
    <HomeSection>
      <CoverVideo />
      <h1>Logo</h1>
      <h1>NavBar</h1>
    </HomeSection>
  );
};

export default Home;
