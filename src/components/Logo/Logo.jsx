import React from 'react';
import { LogoContainer } from './Logo.styled';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogoText } from './Logo.styled';

function Logo() {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: -5,
      transition: {
        duration: 2,
        delay: 2,
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
    <LogoContainer>
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
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
        <LogoText variants={textVariants} initial="hidden" animate="visible">
          Wibe Studio
        </LogoText>
      </Link>
    </LogoContainer>
  );
}

export default Logo;
