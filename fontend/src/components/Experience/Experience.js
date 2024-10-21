import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div>
      <div className="text-divider">
        <h1>Discover Airbnb Experiences</h1>
      </div>
      <div className="middle-section">
        <div className="experience-item">
          <img
            src="https://images.pexels.com/photos/5359974/pexels-photo-5359974.jpeg"
            alt="Experience 1"
            className="experience-image"
          />
          <div className="Sub-left">
            <h1>Things to do on your trip</h1>
            <button className="sub-button">Experiences</button>
          </div>
        </div>
        <div className="experience-item">
          <img
            src="https://images.pexels.com/photos/8054734/pexels-photo-8054734.jpeg"
            alt="Experience 2"
            className="experience-image"
          />
          <div className="Sub-right">
            <h1>Things to do from home</h1>
            <button className="sub-button">Online Experiences</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
