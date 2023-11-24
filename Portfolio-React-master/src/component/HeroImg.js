import './HeroImgStyles.css';
import React from 'react';
import Red from '../assets/Red.jpg';
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
          I'm a dedicated and enthusiastic self-taught Front End Engineer with a
          passion for excellence. Experienced in creating user-friendly,
          visually appealing interfaces, I excel in understanding user
          requirements, implementing best practices, and optimizing website
          performance to deliver exceptional user experiences.
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
