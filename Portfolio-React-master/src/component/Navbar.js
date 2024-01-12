import './NavbarStyles.css';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
// import Resume from '../assets/resume.pdf';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className='header'>
      <Link to='/'>
        <h1>My Portfolio</h1>
      </Link>
      <ul className={click ? 'nav-menu.active' : 'nav-menu'}>
        <li>
          <NavLink to='/'>About</NavLink>
        </li>
        <li>
          <NavLink to='/education'>Education</NavLink>
        </li>
        <li>
          <NavLink to='/skills'>Skills</NavLink>
        </li>
        <li>
          <NavLink to='/project'>Projects</NavLink>
        </li>
        <li>
          <NavLink to='/SocialIcons'>Socials</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
          {/* <Link
            to={Resume}
            className='btn-light'
            download="Kayode's Resume"
            target='_blank'
            rel='noreferrer'
          >
            Resume
            <AiOutlineArrowRight
              size={20}
              style={{
                color: '#fff',
                marginLeft: '1rem',
                marginBottom: '-0.2rem',
                cursor: 'pointer',
              }}
            />
          </Link> */}
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={20} style={{ color: '#fff' }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
