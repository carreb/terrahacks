// src/footer.jsx
import React from 'react';
import TemperatureBar from './TemperatureBar';
import './footer.css';

const Footer = ({ currentEvent, temperature }) => {
  return (
    <div className="footer">
      <div className="current-event">
        <p>{currentEvent}</p>
      </div>
      <div className="temperature-bar-container">
        <TemperatureBar temperature={temperature} />
      </div>
    </div>
  );
};

export default Footer;
