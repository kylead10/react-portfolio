import './PopupStyles.css';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { calc } from '../assets/index';

const Popup = () => {
  return (
    <>
      <Navbar />
      <div>
        <h2 className='heading'>
          Project <span>Demo</span>
        </h2>
        <div id='popup'>
          <video src={calc} muted autoPlay controls></video>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Popup;
