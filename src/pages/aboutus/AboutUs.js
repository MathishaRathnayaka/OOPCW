import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-left">
        <h1>We’re changing the way people connect</h1>
        <p>
          Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. 
          Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor. 
          Sint aliqua anim nulla sunt mollit id pariatur in voluptate cillum. 
          Eu voluptate tempor esse minim amet fugiat veniam occaecat aliqua.
        </p>
      </div>
      <div className="about-us-right">
        <div className="image-grid">
          <img src="/images/img1.jpg" alt="Teamwork" className="grid-item" />
          <img src="/images/img2.jpg" alt="Collaboration" className="grid-item" />
          <img src="/images/img3.jpg" alt="Planning" className="grid-item" />
          <img src="/images/img4.jpg" alt="Networking" className="grid-item" />
          <img src="/images/img5.jpg" alt="Productivity" className="grid-item" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
