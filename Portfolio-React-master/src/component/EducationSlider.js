import './EducationStyles.css';
import React from 'react';

const EducationSlider = () => {
  return (
    <div>
      <section className='education' id='education'>
        <h2 className='heading'>
          My <span>Education</span>
        </h2>
        <div className='education-row'>
          <div className='education-column'>
            <div className='education-box'>
              <div className='education-content'>
                <div className='content'>
                  <div className='year'>
                    <i className='bx bxs-calendar'></i>2016-2022
                  </div>
                  <h3>BSc. , Mechanical Engineering</h3>
                  <p>Obafemi Awolowo University, Nigeria.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationSlider;
