import './PopupStyles.css';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import calc from '../assets/calc.mp4';

const Popup = () => {
  return (
    <>
      <Navbar />
      <div>
        <h2 className='heading'>
          Project <span>Demo</span>
        </h2>
        <div id='popup'>
          <video src={calc} muted autoplay controls></video>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Popup;
