// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import EventGeneratorNonRandom, { getEventImpact } from './EventGenerator';
import Footer from './footer';
import Intro from './intro';
import { MapInteractionCSS } from 'react-map-interaction';
import Piece from './Piece';
import './App.css'; // Import global styles
import Button from './Button';
import Canvas from './Canvas';
import Translation from './Translation';
import nado from './assets/nado.gif';
import cloud from './assets/cloud.png'; // Import your cloud image
import TemperatureBar from './TemperatureBar'; // Import TemperatureBar

const boardPieces = [
  { x: 200, y: 400, type: 'A' },
  { x: 2000, y: 600, type: 'A' }
];

// Use actual dimensions of the image
const MAP_WIDTH = 1920;
const MAP_HEIGHT = 1080;

const initialPop = 100;
const initialFactory = 100;

const initialState = {
  nonRenewable: 0,
  renewable: 0,
  hunting: 100,
  fishing: 100,
  farming: 100,
  humanPop: 100,
  landFloraPop: 100,
  landFaunaPop: 100,
  marineFloraPop: 100,
  marineFaunaPop: 100,
  energy: 0,
  energyQuota: 0,
  temperature: 0,
  elapsed: 0,
  resources: 10000
};

const initialGains = {
  K_food: 0,
  K_human: 0,
  K_energyQuota: 0,
  K_energy: 0,
  K_T: 0,
  K_landFauna: 0,
  K_hunting: 0,
  K_landFlora: 0,
  K_landFaunaPop: 0,
  K_marineFauna: 0,
  K_fishing: 0,
  K_marineFlora: 0,
  K_marineFaunaPop: 0,
  K_Temp: 0,
  K_landFloraPop: 0,
  K_marineFloraPop: 0,
  K_nonRenewable: 0
};

// MAIN ------------------------------------------------------------------------------------------------------------------------------

function App() {
  const prevState = useRef(initialState);
  const [mapState, setMapState] = useState({
    scale: 1,
    translation: { x: 0, y: 0 }
  });
  const [currentEvent, setCurrentEvent] = useState('');
  const [person, setPerson] = useState(() => initialPop);
  const [factory, setFactory] = useState(() => initialFactory);

  const dFactory = (p) => {
    // Change in the factory amount
    console.log('t');
    setFactory((prevFactory) => prevFactory + p);
    boardPieces.push({
      x: Math.random() * MAP_WIDTH,
      y: Math.random() * MAP_HEIGHT,
      type: 'Factory'
    });
  };

  const dPop = (p) => {
    // Change in the population
    setPerson((prevPerson) => prevPerson + p);
    boardPieces.push({
      x: Math.random() * MAP_WIDTH,
      y: Math.random() * MAP_HEIGHT,
      type: 'Person'
    });
  };

  // Calculate minimum scale to fit the map within the container
  const calculateMinScale = (containerWidth, containerHeight) => {
    const scaleX = containerWidth / MAP_WIDTH;
    const scaleY = containerHeight / MAP_HEIGHT;
    return Math.min(scaleX, scaleY);
  };

  // Constrain the translation to prevent panning outside the map boundaries
  const constrainTranslation = (translation, scale, containerWidth, containerHeight) => {
    const scaledWidth = MAP_WIDTH * scale;
    const scaledHeight = MAP_HEIGHT * scale;

    const minX = Math.min(0, containerWidth - scaledWidth);
    const minY = Math.min(0, containerHeight - scaledHeight);
    const maxX = Math.max(0, containerWidth - scaledWidth);
    const maxY = Math.max(0, containerHeight - scaledHeight);

    return {
      x: Math.max(minX, Math.min(maxX, translation.x)),
      y: Math.max(minY, Math.min(maxY, translation.y))
    };
  };

  const buyUpgrade = (upgrade) => {
    if (state.resources >= upgrade.resourceCost) {
      setState((prevState) => ({
        ...prevState,
        resources: prevState.resources - upgrade.resourceCost,
        energy: (prevState.energy || 0) + (upgrade.energyGain || 0),
        nonRenewable: (prevState.nonRenewable || 0) + (upgrade.nonRenewable || 0)
      }));
      dFactory(2)
    }
  };
  
  //------------------------------------------------------------------

  const [state, setState] = useState(initialState);
  const [gains, setGains] = useState(initialGains);
  const [eventIndex, setEventIndex] = useState(0);

  useEffect(() => {
    const resourceInterval = setInterval(() => {
      setState((prevState) => {
        const newState = {
          humanPop: Math.max(0, prevState.humanPop + (gains.K_food || 0) - (gains.K_human || 0) - (gains.K_energyQuota || 0)),
          landFloraPop: Math.max(0, prevState.landFloraPop + (gains.K_landFlora || 0) - (gains.K_landFaunaPop || 0) - (gains.K_T || 0)),
          landFaunaPop: Math.max(0, prevState.landFaunaPop + (gains.K_landFauna || 0) - (gains.K_hunting || 0) - (gains.K_T || 0)),
          marineFloraPop: Math.max(0, prevState.marineFloraPop + (gains.K_marineFauna || 0) - (gains.K_fishing || 0) - (gains.K_T || 0)),
          marineFaunaPop: Math.max(0, prevState.marineFaunaPop + (gains.K_marineFlora || 0) - (gains.K_marineFaunaPop || 0) - (gains.K_T || 0)),
          energy: Math.max(0, prevState.energy + 20 * (prevState.nonRenewable || 0) + 10 * (prevState.renewable || 0)),
          energyQuota: Math.max(0, prevState.energyQuota + prevState.humanPop / 10),
          temperature: prevState.temperature + ((gains.K_Temp) - (gains.K_landFloraPop) - (gains.K_marineFloraPop) + (gains.K_nonRenewable)) / 100,
          elapsed: prevState.elapsed + 1,
          nonRenewable: Math.max(0, prevState.nonRenewable - 0.1),
          renewable: prevState.renewable + 0.0,
          hunting: Math.max(0, prevState.hunting - 1),
          fishing: Math.max(0, prevState.fishing - 1),
          farming: prevState.farming + 0.5,
          resources: prevState.resources - (prevState.energyQuota > prevState.humanPop * 1.5 ? 100 : 50) // Deduct resources based on energyQuota
        };

        // Update gains based on the new state
        setGains({
          K_food: ((newState.hunting || 0) + (newState.fishing || 0) + (newState.farming || 0)) / 50,
          K_human: (newState.humanPop || 0) / 100,
          K_energyQuota: newState.energyQuota > newState.humanPop * 1.5 ? 0 : ((newState.humanPop * 1.5 - newState.energyQuota) || 0) / 100,
          K_energy: (20 * (newState.nonRenewable || 0) + 10 * (newState.renewable || 0)) / 100,
          K_T: 3 - ((newState.landFloraPop || 0) + (newState.marineFloraPop || 0)) / 1000 + (newState.temperature || 0) / 100,
          K_landFauna: 3,
          K_hunting: (newState.hunting || 0) / 50,
          K_landFlora: 3,
          K_landFaunaPop: (newState.landFaunaPop || 0) / 1000,
          K_marineFauna: 3,
          K_fishing: (newState.fishing || 0) / 50,
          K_marineFlora: 4,
          K_marineFaunaPop: (newState.marineFaunaPop || 0) / 1000,
          K_Temp: 2,
          K_landFloraPop: (newState.landFloraPop || 0) / 1000,
          K_marineFloraPop: (newState.marineFloraPop || 0) / 1000,
          K_nonRenewable: (newState.nonRenewable || 0) / 20
        });

        return newState;
      });
    }, 5000);

    return () => clearInterval(resourceInterval);
  }, []);

  //------------------------------------------------------------------------------------------------

  const generateIndex = () => {
    return Math.round(Math.random() * 2.99);
  };

  useEffect(() => {
    if (eventIndex !== 0) {
      console.log(eventIndex);
      let effect = getEventImpact(eventIndex);
      setState((prevState) => ({
        ...prevState,
        humanPop: prevState.humanPop + (effect.humanPop || 0),
        landFloraPop: prevState.landFloraPop + (effect.landFloraPop || 0),
        landFaunaPop: prevState.landFaunaPop + (effect.landFaunaPop || 0),
        marineFloraPop: prevState.marineFloraPop + (effect.marineFloraPop || 0),
        marineFaunaPop: prevState.marineFaunaPop + (effect.marineFaunaPop || 0)
      }));
    }
  }, [eventIndex]);

  //------------------------------------------------------------------------------------

  useEffect(() => {
    const handleResize = () => {
      const scale = calculateMinScale(window.innerWidth, window.innerHeight);
      setMapState({ scale, translation: { x: 0, y: 0 } });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set the scale

    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <div className="App">
      <MapInteractionCSS
        value={mapState}
        onChange={(value) => {
          const constrainedTranslation = constrainTranslation(
            value.translation,
            value.scale,
            window.innerWidth,
            window.innerHeight
          );
          setMapState({ scale: value.scale, translation: constrainedTranslation });
        }}
        minScale={calculateMinScale(window.innerWidth, window.innerHeight)} // Fit the map to the container
        maxScale={5} // Set the maximum zoom scale
      >
        <div
          style={{
            width: MAP_WIDTH,
            height: MAP_HEIGHT,
            position: 'relative',
            overflow: 'hidden' // Ensure no scrollbars
          }}
        >
          <Canvas p={state.humanPop} />

          {boardPieces.map((piece, index) => (
            <Piece key={index} x={piece.x} y={piece.y} type={piece.type} />
          ))}
        </div>
      </MapInteractionCSS>

      <Intro />
      <Button state={state} buyUpgrade={buyUpgrade}/>

      <EventGeneratorNonRandom index={eventIndex} />
      <Footer currentEvent={currentEvent} resources={state.resources} />

      {/* Add the TemperatureBar component */}
      <TemperatureBar temperature={state.temperature} />
    </div>
  );
}

export default App;
