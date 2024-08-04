// src/EventGenerator.jsx
import React, { useState, useEffect } from 'react';
import { events } from './Events';
import './EventGenerator.css';

const getRandomEvent = () => {
  const randomIndex = Math.floor(Math.random() * events.length);
  return events[randomIndex];
};

function getEvent(index) {
  try {
    return events[index];
  } catch (err) {
    return {};
  }
}

export const getEventImpact = (index) => {
  try {
    switch (getEvent(index).type) {
      case 'Disaster':
        return { humanPop: -10, marineFloraPop: -20, marineFaunaPop: -20 };
      case 'Help':
        return { humanPop: -10, landFloraPop: -20, landFaunaPop: -20 };
      default:
        return {};
    } // Add more events as needed
  } catch (err) {
    return {};
  }
};

function EventGeneratorNonRandom(props) {
  const { index } = props;
  const [currentEvent, setCurrentEvent] = useState(() => getEvent(index));
  const [eventImpact, setEventImpact] = useState(() => getEventImpact(index));
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setCurrentEvent(getEvent(index));
    setEventImpact(getEventImpact(index));
  }, [index]);

  // Automatically change events every 20 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = Math.floor(Math.random() * events.length);
      setCurrentEvent(getEvent(newIndex));
      setEventImpact(getEventImpact(newIndex));
      setVisible(true); // Ensure the notification is visible when event changes
    }, 20000); // Change every 20 seconds

    return () => clearInterval(intervalId);
  }, []);

  // Hide notification after 7 seconds
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(false);
    }, 7000); // Hide after 7 seconds

    return () => clearTimeout(timeoutId);
  }, [currentEvent]); // Restart timeout whenever the event changes

  return (
    <div className="event-generator">
      {visible && (
        <div className={`event-card ${currentEvent.type?.toLowerCase()}`}>
          <h3 className="event-type">{currentEvent.type}</h3>
          <p className="event-description">{currentEvent.description}</p>
          <div className="event-impact">
            <p><strong>Impact:</strong></p>
            {Object.entries(eventImpact).map(([key, value]) => (
              <p key={key} className="impact-point">
                {key}: {value > 0 ? `+${value}` : value}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventGeneratorNonRandom;
