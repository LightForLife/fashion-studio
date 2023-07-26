import React from 'react';
import { NavContainer } from './Navbar.styled';
import { MenuBtn } from './Navbar.styled';
import { MenuItems } from './Navbar.styled';
import { MenuItem } from './Navbar.styled';
import { useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { scroll } = useLocomotiveScroll();

  const handleScroll = id => {
    let element = document.querySelector(id);
    setIsOpen(!isOpen);

    scroll.scrollTo(element, {
      offset: '-100',
      duration: '2000',
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <NavContainer
      open={isOpen}
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      transition={{ duration: 2, delay: 5 }}
    >
      <MenuItems
        drag="y"
        dragConstraints={{ top: 0, bottom: 70 }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        <MenuBtn onClick={() => setIsOpen(!isOpen)}>Menu</MenuBtn>
        <MenuItem
          onClick={() => {
            handleScroll('#home');
          }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Home
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleScroll('.about');
          }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          About
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleScroll('#shop');
          }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Shop
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleScroll('#new-arrival');
          }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          New Arrival
        </MenuItem>
      </MenuItems>
    </NavContainer>
  );
};

export default NavBar;
