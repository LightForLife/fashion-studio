import React from 'react';
import { VideoContainer } from './CoverVideo.styled';
import MainVideo from '../../assets/video.mp4';
import { DarkOverlay } from './CoverVideo.styled';

function CoverVideo() {
  //   const isMuted = useRef(true);
  return (
    <VideoContainer>
      <DarkOverlay />
      <video src={MainVideo} type="video/mp4" muted autoPlay loop />
    </VideoContainer>
  );
}

export default CoverVideo;
