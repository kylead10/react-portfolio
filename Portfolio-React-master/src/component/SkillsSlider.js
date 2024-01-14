import './SkillsStyles.css';

import React from 'react';

const SkillsSlider = () => {
  return (
    <div>
      <section className='skills' id='skills'>
        <h2 className='heading'>
          My <span>Skills</span>
        </h2>
        <div className='skills-row'>
          <div className='skills-column'>
            <div className='skills-box'>
              <div className='skills-content'>
                <div className='progress'>
                  <h3>
                    HTML <span>90%</span>
                  </h3>
                  <div className='bar'>
                    <span></span>
                  </div>
                </div>
                <div className='progress'>
                  <h3>
                    CSS <span>80%</span>
                  </h3>
                  <div className='bar'>
                    <span></span>
                  </div>
                </div>
                <div className='progress'>
                  <h3>
                    JavaScript<span>67%</span>
                  </h3>
                  <div className='bar'>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='skills-column'>
            <div className='skills-box'>
              <div className='skills-content'>
                <div className='progress'>
                  <h3>
                    React <span>67%</span>
                  </h3>
                  <div className='bar'>
                    <span></span>
                  </div>
                </div>
                <div className='progress'>
                  <h3>
                    NextJS <span> -In view</span>
                  </h3>
                  <div className='bar_'>
                    <span></span>
                  </div>
                </div>
                <div className='progress'>
                  <h3>
                    NodeJS <span> -In view</span>
                  </h3>
                  <div className='bar_'>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsSlider;
