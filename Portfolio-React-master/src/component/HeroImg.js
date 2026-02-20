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
        <h1>ADIO Kayode</h1>
        <h3>
          A <span>Product Manager & Frontend Developer</span>
        </h3>
        <p>
          I am a product-focused builder with a background in Front-End
          Engineering and a strong interest in Product Management. My experience
          building user-facing applications has shaped how I think about
          products — starting with problem definition, understanding user
          behavior, and aligning solutions with measurable business outcomes. I
          am particularly drawn to product strategy, user research, and
          outcome-driven decision-making. I focus on asking the right questions
          before jumping into solutions, ensuring that features are rooted in
          real user needs and clear impact metrics. My technical foundation
          allows me to collaborate effectively with engineering teams while
          maintaining a strong user-centric perspective. I am committed to
          continuous learning, structured thinking, and building products that
          create meaningful, scalable value.
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
