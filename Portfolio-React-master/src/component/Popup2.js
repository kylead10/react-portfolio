import './PopupStyles.css';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Netflix } from '../assets';

const Popup2 = () => {
  return (
    <>
      <Navbar />
      <div>
        <h2 className='heading'>
          Project <span>Demo</span>
        </h2>
        <div id='popup2'>
          <video src={Netflix} muted autoPlay controls></video>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Popup2;
