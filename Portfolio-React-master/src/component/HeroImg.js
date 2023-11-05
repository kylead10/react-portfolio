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
        <p></p>
        <div className='buttons'>
          <Link to='/project' className='btn'>
            Projects
          </Link>
          <Link to='/contact' className='btn-light'>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
