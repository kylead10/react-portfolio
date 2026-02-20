import './PopupStyles.css';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { RPS } from '../assets';

const Popup3 = () => {
  return (
    <>
      <Navbar />
      <div>
        <h2 className='heading'>
          Project <span>Demo</span>
        </h2>
        <div id='popup3'>
          <video src={RPS} muted autoPlay controls></video>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Popup3;
