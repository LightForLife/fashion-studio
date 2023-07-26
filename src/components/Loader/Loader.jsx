import React from 'react';
import { LoaderContainer, LoaderText } from './Loader.styled';
import { motion } from 'framer-motion';

const Loader = () => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        yoyo: Infinity, // repeats infinite time
        ease: 'easeInOut',
      },
    },
  };

  const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <LoaderContainer
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 2 }}
    >
      {' '}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // enable-background="new 0 0 24 24"
        height="48px"
        viewBox="0 0 24 24"
        width="48px"
        fill="none"
      >
        <g></g>
        <g>
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
          />
        </g>
      </svg>
      <LoaderText variants={textVariants} initial="hidden" animate="visible">
        Wibe Studio
      </LoaderText>
    </LoaderContainer>
  );
};

export default Loader;
