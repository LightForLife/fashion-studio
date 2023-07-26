import React from 'react';
import {
  NewArrivalSection,
  NewArrivalOverlay,
  NewArrivalTitle,
  NewArrivalText,
} from './NewArrival.styled';

const NewArrival = () => {
  return (
    <NewArrivalSection>
      <NewArrivalOverlay />
      <NewArrivalTitle
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        New Arrivals
      </NewArrivalTitle>
      <NewArrivalText
        data-scroll
        data-scroll-sticky
        data-scroll-target="#fixed-target"
      >
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
