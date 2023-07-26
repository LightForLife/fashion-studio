import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LoaderContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  touch-action: none;
  overflow: hidden;

  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};

  svg {
    width: 10vw;
    height: auto;
    overflow: visible;

    stroke-linejoin: round;
    stroke-linecap: round;

    g {
      path {
        stroke: ${props => props.theme.text};
      }
    }
  }
`;

export const LoaderText = styled(motion.span)`
  font-size: ${props => props.theme.fontxl};
  color: ${props => props.theme.text};
  padding-top: 0.5rem;
`;
