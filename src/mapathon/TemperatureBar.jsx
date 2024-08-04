// src/TemperatureBar.jsx
import React from 'react';
import './TemperatureBar.css';

const TemperatureBar = ({ temperature }) => {
  // Calculate the fill percentage based on the temperature (range 0 to 2)
  const fillPercentage = Math.min(Math.max((temperature / 2) * 100, 0), 100);
  const roundedPercentage = Math.round(fillPercentage);

  return (
    <div className="temperature-bar">
      <div
        className="temperature-bar-fill"
        style={{ width: `${fillPercentage}%` }}
      >
        <span className="temperature-bar-text">{roundedPercentage}%</span>
      </div>
    </div>
  );
};

export default TemperatureBar;
