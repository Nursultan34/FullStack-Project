import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';
import './Header.css';

function Header() {
  const nav__link = [
    {
      path: 'home',
      display: 'Home',
    },
    {
      path: 'shop',
      display: 'Shop',
    },
    {
      path: 'cart',
      display: 'Cart',
    },
  ];
  const headerRef = useRef(null);
  const menuRef = useRef(null)
  const stickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };
  useEffect(() => {
   stickyHeader()
   return () => window.removeEventListener('scroll',stickyHeader)
  },[])
  const menuToggle = () => menuRef.current.classList.toggle('active__menu')
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__link.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) => (navClass.isActive ? 'nav__active' : '')}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">1</span>
              </span>
              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
              </span>
              <div className="mobile__menu">
              <span >
                <i onClick={menuToggle} className="ri-menu-line"></i>
              </span>
            </div>
            </div>
            
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
