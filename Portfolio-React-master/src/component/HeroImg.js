import './HeroImgStyles.css';
import React from 'react';
import Red from '../assets/red2.png';
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img src={Red} alt='My Pic' className='into-img' />
      </div>
      <div className='content' style={{ zIndex: 20 }}>
        <h3>Hello, I'm</h3>
        <h1>ADIO Oluwakayode</h1>
        <h3>
          A <span>Frontend Developer</span>
        </h3>
        <p>
          A dedicated and enthusiastic programmer and creative problem solver. A
          self thought Front End Engineer, motivated by a relentless passion for
          excellence. With a well-established history of crafting user-friendly,
          aesthetically pleasing interfaces, I excel in deciphering user needs,
          applying industry best practices, and enhancing website performance to
          provide unparalleled user experiences.
        </p>
        <div className='buttons'>
          <Link to='/project' className='btn'>
            Projects
          </Link>
          <Link to='/contact' className='btn-light'>
            Contact me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
