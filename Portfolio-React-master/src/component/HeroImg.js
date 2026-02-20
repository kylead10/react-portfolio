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
          I am a dedicated and enthusiastic self-taught Front-End Engineer with
          a strong passion for building intuitive, high-performing digital
          experiences. I specialize in creating user-friendly and visually
          engaging interfaces, translating user requirements into scalable
          solutions, and optimizing performance to deliver seamless experiences.
          Beyond implementation, I have developed a growing interest in Product
          Management — focusing on problem definition, user research, and
          outcome-driven decision-making. I am particularly interested in
          understanding not just how to build products, but why they should be
          built, ensuring every feature aligns with real user needs and
          measurable business impact. I am driven by continuous learning,
          thoughtful execution, and building products that create meaningful
          value.
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
