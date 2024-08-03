import React, { useState, useEffect } from 'react';
import '../../App.css';
import '../homepage_styles.css';
import GiantTimerSplash from '../GiantTimerSplash';

function Home () {

    return (
        <>
        <div className='homepage-flex-container'>
            <GiantTimerSplash />
            <div className="padding"></div>
        </div>
        </>
    );
}

export default Home; 