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
// import { SiGmail } from 'react-icons/si';
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
              <p>Lagos, Nigeria.</p>
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
              <a href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=adiokayode111@gmail.com'>
                <FaMailBulk
                  size={20}
                  style={{
                    color: '#fff',
                    marginRight: '2rem',
                    cursor: 'pointer',
                  }}
                />
                Adiokayode111@gmail.com
              </a>
            </h4>
          </div>
        </div>
        <div className='right'>
          <h4>Feel free to contact me ...</h4>
          <p>
            I am ADIO Oluwakayode, and I have a genuine passion for engaging in
            conversations about innovative projects and design complexities. I
            invite you to connect with me on my various social media platforms,
            where we can explore and discuss these topics in greater depth.
          </p>
          <div className='social'>
            <Link
              to='https://www.linkedin.com/in/adio-oluwakayode'
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
            <Link to='https://www.instagram.com/kylead10/' target='_blank'>
              <FaInstagram
                size={30}
                style={{
                  color: '#fff',
                  marginRight: '1rem',
                  cursor: 'pointer',
                }}
              />
            </Link>
            <Link to='https://github.com/kylead10' target='_blank'>
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
              href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=adiokayode111@gmail.com'
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
