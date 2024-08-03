import React, { useState, useEffect } from 'react';
import '../../App.css';
import '../homepage_styles.css';
import GiantTimerSplash from '../GiantTimerSplash';
import BloodDripSVG from '../BloodDripSVG.jsx'; // ignore error? it doesn't seem to mean anything

function Home () {

    return (
        <>
        <div className='homepage-flex-container'>
            <GiantTimerSplash />
            <BloodDripSVG />
            <div className="padding"></div>
        </div>
        </>
    );
}

export default Home; 