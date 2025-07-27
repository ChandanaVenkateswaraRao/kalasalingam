
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [display, setDisplay] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setDisplay((prev) => !prev);

  return (
    <nav className={`container ${sticky || location.pathname !== '/' ? 'dark-nav' : ''}`}>
      <RouterLink to="/home">
        <img src= 'https://www.kalasalingam.ac.in/wp-content/uploads/2022/02/Logo.png' alt="logo" className="logo" />
      </RouterLink>

      <ul className={display ? '' : 'hide-mobile-menu'}>
        <li><RouterLink to="/home#hero">Home</RouterLink></li>
        <li><a href="/home#program">Program</a></li>
        <li><a href="/home#about">About Us</a></li>
        <li><a href="/home#campus">Campus</a></li>
        <li><a href="/home#testimonials">Testimonials</a></li>
        <li>
          <button className="btn">
            <a href="/home#contact">Contact Us</a>
          </button>
        </li>
      </ul>

      <img src={menu_icon} alt="menu" onClick={toggleMenu} className="menu-icon" />
    </nav>
  );
};

export default Navbar;
