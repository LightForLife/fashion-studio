import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import { dark } from 'styles/Themes';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';
import Home from '../sections/Home/Home';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { AnimatePresence } from 'framer-motion';
import About from 'sections/About/About';
import Shop from 'sections/Shop/Shop';
import ScrollTriggerProxy from './ScrollTriggerProxy/ScrollTriggerProxy';
import Banner from 'sections/Banner/Banner';
import NewArrival from 'sections/NewArrival/NewArrival';

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
          {' '}
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <ScrollTriggerProxy />
              <Home />
              <About />
              <Shop />
              <Banner />
              <NewArrival />
            </main>{' '}
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
};
