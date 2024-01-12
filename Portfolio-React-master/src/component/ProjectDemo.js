import './ProjectStyles.css';
import React from 'react';

import calc from '../assets/calc.png';
import RPS from '../assets/RPS.png';
import Fms from '../assets/Fms.png';

import { Link } from 'react-router-dom';
import { FaGithub, FaVideo } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';

const ProjectDemo = () => {
  return (
    <div>
      <section className='portfolio' id='portfolio'>
        <h2 className='heading'>
          Latest <span>Projects</span>
        </h2>
        <div className='portfolio-container' style={{ zIndex: 20 }}>
          <div className='portfolio-box'>
            <img src={RPS} alt='rock paper and scissors' />
            <div className='portfolio-layer'>
              <h4>Rock Paper Scissors game </h4>
              <p>
                Classic fun reborn: Rock, Paper, Scissors reinvented with a
                sleek interface
              </p>
              <div className='connects'>
                <Link
                  className='redirect'
                  to='https://github.com/kylead10/Rock-Scissors-and-Paper-game'
                  target='_blank'
                >
                  <FaGithub size={30} style={{ color: 'var(--bg-color' }} />
                </Link>
                {/* <Link to='' target='_blank'>
                  <BiLinkExternal
                    size={30}
                    style={{ color: 'var(--bg-color' }}
                  />
                </Link> */}
                <Link className='redirect' to='/popup3' target='_blank'>
                  <FaVideo size={30} style={{ color: 'var(--bg-color' }} />
                </Link>
              </div>
            </div>
          </div>
          <div className='portfolio-box'>
            <img src={Fms} alt='Netflix clone' />
            <div className='portfolio-layer'>
              <h4>Netflix clone</h4>
              <p>
                Dive into a captivating world of movies and series, with
                trailers powered by IDMB & YouTube.
              </p>
              <div className='connects'>
                <Link
                  className='redirect'
                  href='https://github.com/kylead10/netflix-clone'
                  target='_blank'
                >
                  <FaGithub size={30} style={{ color: 'var(--bg-color' }} />
                </Link>
                <Link
                  className='redirect'
                  to='https://netflix-clone-b29b6.firebaseapp.com/'
                  target='_blank'
                >
                  <BiLinkExternal
                    size={30}
                    style={{ color: 'var(--bg-color' }}
                  />
                </Link>
                <Link className='redirect' to='/popup2' target='_blank'>
                  <FaVideo size={30} style={{ color: 'var(--bg-color' }} />
                </Link>
              </div>
            </div>
          </div>
          <div className='portfolio-box'>
            <img src={calc} alt='Age calculator' />
            <div className='portfolio-layer'>
              <h4>Age Calculator</h4>
              <p>
                Unravel time's secrets: Effortlessly calculate your age and
                others', gaining instant insights into life's journey.
              </p>
              <div className='connects'>
                <Link
                  className='redirect'
                  to='https://github.com/kylead10/age-calculator'
                  target='_blank'
                >
                  <FaGithub size={30} style={{ color: 'var(--bg-color' }} />
                </Link>

                <Link className='redirect' to='/popup' target='_blank'>
                  <FaVideo size={30} style={{ color: 'var(--bg-color' }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDemo;
