import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef, useLayoutEffect } from 'react';
import {
  NewArrivalSection,
  NewArrivalOverlay,
  NewArrivalTitle,
  NewArrivalText,
  NewArrivalContainer,
  Item,
} from './NewArrival.styled';
import img1 from '../../assets/Images/11.webp';
import img2 from '../../assets/Images/12.webp';
import img3 from '../../assets/Images/13.webp';
import img4 from '../../assets/Images/14.webp';

const ShopProduct = ({ img, title = '' }) => {
  return (
    <Item>
      <img src={img} alt={title} />
      <h2>{title}</h2>
    </Item>
  );
};

const NewArrival = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = ScrollingRef.current;

    let tl = gsap.timeline();

    setTimeout(() => {
      tl.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: `bottom+=100% top-=100%`,
          scroller: '.App', // locomotive element
          scrub: 1,
          pin: true,
          //   markers: true,
        },

        // we have to increase scrolling height of this section same as the scrolling element width

        ease: 'none',
      });

      // Vertical Scrolling
      tl.fromTo(
        scrollingElement,
        { y: '0' },
        {
          y: '-100%',
          scrollTrigger: {
            trigger: scrollingElement,
            start: 'top top',
            end: `bottom top`,
            scroller: '.App', // locomotive element
            scrub: 1,
            // markers: true,
          },

          // we have to increase scrolling height of this section same as the scrolling element width
        }
      );
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      tl.kill(true);
      ScrollTrigger.killAll(true);
    };
  }, []);

  return (
    <NewArrivalSection ref={ref}>
      <NewArrivalOverlay />
      <NewArrivalTitle
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        New Arrivals
      </NewArrivalTitle>

      <NewArrivalContainer ref={ScrollingRef}>
        <ShopProduct img={img1} title="Denim" />
        <ShopProduct img={img2} title="Cool Dresses" />
        <ShopProduct img={img3} title="Jackets" />
        <ShopProduct img={img4} title="T-shirts" />
      </NewArrivalContainer>

      <NewArrivalText data-scroll data-scroll-speed="-4">
        There is new collection available for cool clothes in all sizes. This
        collection is a great way to find a new look for you. It offers a
        variety of cool apparel styles to fit your taste, while you can also
        find some cool clothes that you can wear everyday.
        <br />
        <br />
        The first line of clothing you will see on this collection is for men.
        The collection also includes three new styles for women.
        <br />
        <br />
        Give it a try and experience a new look.
      </NewArrivalText>
    </NewArrivalSection>
  );
};

export default NewArrival;
