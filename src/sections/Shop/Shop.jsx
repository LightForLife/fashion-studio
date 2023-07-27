import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { ShopSection, ShopTitle, Left, Right } from './Shop.styled';
import ShopProduct from './ShopProduct';

import img1 from '../../assets/Images/1.webp';
import img2 from '../../assets/Images/2.webp';
import img3 from '../../assets/Images/3.webp';
import img4 from '../../assets/Images/4.webp';
import img5 from '../../assets/Images/5.webp';
import img6 from '../../assets/Images/6.webp';
import img7 from '../../assets/Images/7.webp';
import img8 from '../../assets/Images/8.webp';
import img9 from '../../assets/Images/9.webp';
import img10 from '../../assets/Images/10.webp';

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = Horizontalref.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let tl = gsap.timeline();

    setTimeout(() => {
      tl.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: `${pinWrapWidth} bottom`,
          scroller: '.App', // locomotive element
          scrub: 1,
          pin: true,
          // markers: true,
        },

        // we have to increase scrolling height of this section same as the scrolling element width

        height: `${scrollingElement.scrollWidth}px`,
        ease: 'none',
      });

      // Horizontal Scrolling
      tl.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: 'top top',
          end: `${pinWrapWidth} bottom`,
          scroller: '.App', // locomotive element
          scrub: 1,
          // markers: true,
        },

        // we have to increase scrolling height of this section same as the scrolling element width

        x: -pinWrapWidth,
        ease: 'none',
      });
      ScrollTrigger.refresh();
    }, 1000);

    ScrollTrigger.refresh();

    return () => {
      tl.kill(true);
      // tl.ScrollTrigger.kill(true);
      ScrollTrigger.killAll(true);
    };
  }, []);

  return (
    <ShopSection ref={ref} id="shop">
      <ShopTitle data-scroll data-scroll-speed="-1">
        New Collection
      </ShopTitle>
      <Left>
        <p>
          The brand new collection is currently being developed in USA. We
          create our products using best quality material, including the use of
          some of the pure fabrics to make our products. All products are made
          using the best materials, from the finest cotton to the finest
          fabrics.
          <br />
          <br />
          We have lots of different clothing options like shoes, jackets and
          dresses. Not only clothes but we also provide unique Jewellery as
          well. It is great for us to carry our new clothes all around the
          country and look different.
        </p>
      </Left>
      <Right ref={Horizontalref}>
        <ShopProduct img={img1} title="Man Basics" />
        <ShopProduct img={img2} title="Tops" />
        <ShopProduct img={img3} title="Sweatshirts" />
        <ShopProduct img={img4} title="Ethnic Wear" />
        <ShopProduct img={img5} title="Blazers" />
        <ShopProduct img={img6} title="Suits" />
        <ShopProduct img={img7} title="Antiques" />
        <ShopProduct img={img8} title="Jewellery" />
        <ShopProduct img={img9} title="Watches" />
        <ShopProduct img={img10} title="Special Edition" />
      </Right>
    </ShopSection>
  );
};

export default Shop;
