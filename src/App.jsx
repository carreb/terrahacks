import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import Factors from './components/formulas/Factors.jsx';
import Sim from './mapathon/Sim.jsx'
import DeviceDoesNotMeetRequiredScreenSize from './components/pages/DeviceDoesNotMeetRequiredScreenSize.jsx';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/factors' element={<Factors/>}></Route>
        <Route path='/device-does-not-meet-required-screen-size' element={<DeviceDoesNotMeetRequiredScreenSize />}></Route>
        <Route path='/Sim' exact element={<Sim/>}> </Route>
      </Routes>
    </Router>
    </>
      
  );
}

export default App;
