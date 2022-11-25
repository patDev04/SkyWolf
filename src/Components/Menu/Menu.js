import React, { useState } from 'react';
import './Menu.scss';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillCloseCircle,
} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import Contact from '../ContactUs/Contact';

const Menu = () => {
  const [hamburger, setHamburger] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showContact, setShowContact] = useState(false);

  function toggleHamburger() {
    setHamburger(!hamburger);
    setShowMenu(!showMenu);
  }

  return (
    <>
      <div className="menu">
        <i className="hamburgerMenu" onClick={toggleHamburger}>
          {hamburger ? <AiOutlineMenu /> : <AiOutlineClose />}
        </i>
        <ul className={`dropdown-menu ${showMenu ? 'active' : 'inactive'}`}>
          <NavLink className="menu-list" to={'/'}>
            Home
          </NavLink>
          <a className="menu-list" href="#about">
            About us
          </a>
          <NavLink className="menu-list" to={'/strategies'}>
            strategies
          </NavLink>
          <li className="menu-list" onClick={() => setShowContact(true)}>
            contact us
          </li>
        </ul>
      </div>
      <div className={`contact ${showContact ? 'active' : 'inactive'}`}>
        <i className="closeContact" onClick={() => setShowContact(false)}>
          <AiFillCloseCircle />
        </i>
        <Contact />
      </div>
    </>
  );
};

export default Menu;
