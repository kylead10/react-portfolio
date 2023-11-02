import './FooterStyles.css';
import React from 'react';
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGoogle,
} from 'react-icons/fa';
// import {SiGmail} from "react-icons/si";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome
              size={20}
              style={{ color: '#fff', marginRight: '2rem', cursor: 'pointer' }}
            />
            <div>
              <p>Ikeja Lagos,</p>
              <p>Nigeria.</p>
            </div>
          </div>
          <div className='phone'>
            <h4>
              <FaPhone
                size={20}
                style={{
                  color: '#fff',
                  marginRight: '2rem',
                  cursor: 'pointer',
                }}
              />
              +234 802 312 9091
            </h4>
          </div>
          <div className='email'>
            <h4>
              <FaMailBulk
                size={20}
                style={{
                  color: '#fff',
                  marginRight: '2rem',
                  cursor: 'pointer',
                }}
              />
              adiokayode111@gmail.com
            </h4>
          </div>
        </div>
        <div className='right'>
          <h4>Feel free to contact me...</h4>
          <p>
            This is Harmanjot Kaur.I enjoy discussing new projects and design
            challenges.
          </p>
          <div className='social'>
            <Link
              to='https://www.linkedin.com/in/harmanjot-kaur-4427b122a/'
              target='_blank'
            >
              <FaLinkedin
                size={30}
                style={{
                  color: '#fff',
                  marginRight: '1rem',
                  cursor: 'pointer',
                }}
              />
            </Link>
            <Link
              to='https://www.instagram.com/harmankaur_2002/'
              target='_blank'
            >
              <FaInstagram
                size={30}
                style={{
                  color: '#fff',
                  marginRight: '1rem',
                  cursor: 'pointer',
                }}
              />
            </Link>
            <Link to='https://github.com/harmanjot2002' target='_blank'>
              {' '}
              <FaGithub
                size={30}
                style={{
                  color: '#fff',
                  marginRight: '1rem',
                  cursor: 'pointer',
                }}
              />
            </Link>
            <a
              href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=harmanjotkainth@gmail.com'
              target='_blank'
            >
              {' '}
              <FaGoogle
                size={30}
                style={{
                  color: '#fff',
                  marginRight: '1rem',
                  cursor: 'pointer',
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
