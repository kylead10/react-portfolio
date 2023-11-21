import './ProjectStyles.css';
import React from 'react';

import CALC from '../assets/CALC.png';
import RPS from '../assets/RPS.png';
import FMS from '../assets/FMS.png';

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
                The "Rock, Paper, Scissors Game" is a web-based project that
                offers a classic and interactive gaming experience. It features
                an attractive and responsive interface built with HTML, CSS, and
                JavaScript, providing users with a fun and challenging way to
                test their strategic decision-making skills.
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
                <Link to='/popup3' target='_blank'>
                  <FaVideo size={30} style={{ color: 'var(--bg-color' }} />
                </Link>
              </div>
            </div>
          </div>
          <div className='portfolio-box'>
            <img src={FMS} alt='Netflix clone' />
            <div className='portfolio-layer'>
              <h4>Netflix clone</h4>
              <p>
                Discover a world of captivating entertainment on our platform.
                Immerse yourself in a vast collection of movies and series.
                Explore the latest releases with immersive trailers powered by
                IDMB API and the YouTube API, and let the excitement unfold
                before your eyes. Your next binge-worthy experience awaits.
              </p>
              <div className='connects'>
                <Link
                  className='redirect'
                  to='https://github.com/kylead10/netflix-clone'
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
                <Link to='/popup2' target='_blank'>
                  <FaVideo size={30} style={{ color: 'var(--bg-color' }} />
                </Link>
              </div>
            </div>
          </div>
          <div className='portfolio-box'>
            <img src={CALC} alt='Age calculator' />
            <div className='portfolio-layer'>
              <h4>Age Calculator</h4>
              <p>
                Uncover the mystery of time with my Age calculator app.
                Effortlessly determine your age or the age of others by entering
                birth-dates. Simplify your timekeeping and gain instant insights
                into the passage of years. This app can effortlessly calculate
                the ages that shape your journey through time.
              </p>
              <div className='connects'>
                <Link
                  className='redirect'
                  to='https://github.com/kylead10/age-calculator'
                  target='_blank'
                >
                  <FaGithub size={30} style={{ color: 'var(--bg-color' }} />
                </Link>

                <Link to='/popup' target='_blank'>
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
