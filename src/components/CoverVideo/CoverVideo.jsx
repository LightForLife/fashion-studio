import React from 'react';
import { VideoContainer } from './CoverVideo.styled';
import MainVideo from '../../assets/video.mp4';
import { DarkOverlay } from './CoverVideo.styled';
import { HomeTitle } from './CoverVideo.styled';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

function CoverVideo() {
  return (
    <VideoContainer>
      <DarkOverlay />
      <HomeTitle variants={container} initial="hidden" animate="show">
        <div>
          <h1 data-scroll data-scroll-delay="0.13" data-scroll-speed="4">
            W
          </h1>
          <h1 data-scroll data-scroll-delay="0.09" data-scroll-speed="4">
            i
          </h1>
          <h1 data-scroll data-scroll-delay="0.06" data-scroll-speed="4">
            b
          </h1>
          <h1 data-scroll data-scroll-delay="0.04" data-scroll-speed="4">
            e
          </h1>
        </div>
        <h2 data-scroll data-scroll-delay="0.04" data-scroll-speed="2">
          Inspire. Create. Belive
        </h2>
      </HomeTitle>
      <video src={MainVideo} type="video/mp4" muted autoPlay loop />
    </VideoContainer>
  );
}

export default CoverVideo;
