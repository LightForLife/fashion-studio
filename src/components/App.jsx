import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import { dark } from 'styles/Themes';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';
import Home from '../sections/Home/Home';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { AnimatePresence } from 'framer-motion';
import About from 'sections/About/About';

export const App = () => {
  const containerRef = useRef(null);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <AnimatePresence>
            <main data-scroll-container ref={containerRef}>
              <Home />
              <About />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
};
