import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import Factors from './components/formulas/Factors.jsx';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/factors' element={<Factors/>}></Route>
      </Routes>
    </Router>
    </>
      
  );
}

export default App;
