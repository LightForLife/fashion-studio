import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import { dark } from 'styles/Themes';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useRef, useState, useEffect } from 'react';

import Home from '../sections/Home/Home';
import { AnimatePresence } from 'framer-motion';
import About from 'sections/About/About';
import Shop from 'sections/Shop/Shop';
import ScrollTriggerProxy from './ScrollTriggerProxy/ScrollTriggerProxy';
import Banner from 'sections/Banner/Banner';
import NewArrival from 'sections/NewArrival/NewArrival';
import Footer from 'sections/Footer/Footer';
import Loader from './Loader/Loader';

export const App = () => {
  const containerRef = useRef(null);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options

            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <AnimatePresence>{isLoaded ? null : <Loader />}</AnimatePresence>
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home />
              <About />
              <Shop />
              <Banner />
              <NewArrival />
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
};
