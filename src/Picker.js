import React from 'react';
import Header from './Header';
import Main from './Main';
import './Picker.css';
import './bgved.css';

const Picker = () => {
  return (
    <div className='video-container'>
      <img src="/kprlogo.jpg" className='kprlogo' alt="KPR" />
      <video autoPlay loop muted id="background-video">
      <source src={process.env.PUBLIC_URL + '/freshersbv1.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="contents">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default Picker;
