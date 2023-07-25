import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ShopSection, ShopTitle, Left, Right } from './Shop.styled';
import { useRef, useLayoutEffect } from 'react';
import { Item } from './Shop.styled';
import img1 from '../../assets/Images/1.webp';

const Product = ({ img, title = '' }) => {
  return (
    <Item>
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.App', // locomotive element
          scrub: true,
          pin: true,
          markers: true,
        },

        // we have to increase scrolling height of this section same as the scrolling element width

        height: `${scrollingElement.scrollWidth}px`,
        ease: 'none,',
      });

      // Horizontal Scrolling
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.App', // locomotive element
          scrub: true,
          markers: true,
        },

        // we have to increase scrolling height of this section same as the scrolling element width

        x: -pinWrapWidth,
        ease: 'none,',
      });
      console.log(element);
      ScrollTrigger.refresh();
    }, 1000);

    return () => {};
  }, []);

  return (
    <ShopSection ref={ref}>
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
      <Right ref={horizontalRef}>
        <Product img={img1} title="xyz" />
        <Product img={img1} title="xyz" />
        <Product img={img1} title="xyz" />
        <Product img={img1} title="xyz" />
        <Product img={img1} title="xyz" />
        <Product img={img1} title="xyz" />
        <Product img={img1} title="xyz" />
        <Product img={img1} title="xyz" />
        <Product img={img1} title="xyz" />
        <Product img={img1} title="xyz" />
        <Product img={img1} title="xyz" />
        <Product img={img1} title="xyz" />
        <Product img={img1} title="xyz" />
      </Right>
    </ShopSection>
  );
};

export default Shop;
