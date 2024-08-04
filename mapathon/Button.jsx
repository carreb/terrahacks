import React, { useState } from 'react';
import './Button.css';

const Button = ({ state, buyUpgrade }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div className="button-container">
      <button onClick={togglePanel} className="toggle-button">
        {isPanelOpen ? 'Close Panel' : 'Open Panel'}
      </button>
      <div className={`side-panel ${isPanelOpen ? 'open' : 'closed'}`}>
        <div className="stats-box">
          <h2>Stats</h2>
          <p>Energy: {state.energy}</p>
          <p>Non Renewable: {state.nonRenewable}</p>
          <p>Renewable: {state.renewable}</p>
          <p>Energy Quota: {state.energyQuota}</p>
          <p>Human Population: {state.humanPop}</p>
          <p>Land Animals: {state.landFaunaPop}</p>
          <p>Land Plants: {state.landFloraPop}</p>
          <p>Marine Animals: {state.marineFaunaPop}</p>
          <p>Marine Plants: {state.marineFloraPop}</p>
          <p>Hunting: {state.hunting}</p>
          <p>Farming: {state.farming}</p>
          <p>Fishing: {state.fishing}</p>
          <p>Resources: {state.resources}</p>
          <p>Temperature: {state.temperature}</p>
          <p>Elapsed: {state.elapsed}</p>
        </div>
        <div className="buttons-box">
          <h2>Upgrades</h2>
          <button onClick={() => buyUpgrade({
            id: 1,
            name: 'Fossil Fuel Generator',
            nonRenewable: 1,
            resourceCost: 100
          })}>
            Buy Fossil Fuel Generator (Cost: 100 Resources)
          </button>
          {/* Add more upgrade buttons as needed */}
        </div>
      </div>
    </div>
  );
};

export default Button;
