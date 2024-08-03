import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.jsx';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>

      </Routes>
    </Router>
    </>
      
  );
}

export default App;
