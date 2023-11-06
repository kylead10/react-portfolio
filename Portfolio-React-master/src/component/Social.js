import './SocialStyles.css';
import React from 'react';
// import { Link } from "react-router-dom";
import Inst from '../assets/instagram.webp';
import Linkedin from '../assets/linkedin.png';

const Social = () => {
  return (
    <>
      <div className='images' style={{ zIndex: 20 }}>
        <a
          href='https://www.instagram.com/kylead10/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={Inst} alt='Instagram-logo' className='Instalogo' />
        </a>
        <a
          href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=adiokayode111@gmail.com'
          target='_blank'
        >
          <img
            src='https://cdn.pixabay.com/photo/2019/10/19/17/24/gmail-4561841_960_720.png'
            alt='email'
            className='emaillogo'
          />
        </a>
        <br />
        <a href='https://github.com/kylead10' target='_blank'>
          <img
            src='https://qph.cf2.quoracdn.net/main-qimg-729a22aba98d1235fdce4883accaf81e'
            alt='git logo'
            className='gitlogo'
          />
        </a>
        <a href='https://www.linkedin.com/in/adio-oluwakayode' target='_blank'>
          <img src={Linkedin} alt='Linkedin Logo' className='tele' />
        </a>
      </div>
    </>
  );
};

export default Social;
