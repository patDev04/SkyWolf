import React from 'react';
import './Home.scss';
import logo from '../../Images/logo.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import BottomMenu from './../../Components/BottomMenu/BottomMenu';

const Home = () => {
  return (
    <>
      <div className="landing">
        <motion.img
          className="landing__img"
          src={logo}
          alt="logo"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 2 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        />
        <div className="about-box">
          <h1>ABOUT</h1>
          <br />
          <h1 className="about-text">
            We are a cutting-edge creative design company of specialist web
            developers, graphic designers, marketing specialists, technicians
            and professional architects from the United kingdom, USA and Africa
          </h1>

          <Link to={'/about'} className="readbtn" id="about">
            read more <HiOutlineArrowNarrowRight className="arrow" />
          </Link>
        </div>
      </div>
      <BottomMenu />
    </>
  );
};

export default Home;
