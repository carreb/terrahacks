import React, { useState, useEffect } from 'react';
import '../../App.css';
import '../homepage_styles.css';
import GiantTimerSplash from '../GiantTimerSplash';
import StickyTime from '../StickyTimer';

function Home () {

    const [pixel, setPixel] = useState(0)

    const scrollSticky = 900

    let lastKnownScrollPosition = 0;
    let ticking = false;

    function doSomething(scrollPos) {
        setPixel(lastKnownScrollPosition);
    }

    document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
        doSomething(lastKnownScrollPosition);
        ticking = false;
        });

        ticking = true;
    }
    });
    
    return (
        (pixel < scrollSticky) ? (
            <>
            <div className='homepage-flex-container'>
                <GiantTimerSplash />
                <div className="padding">{window.scrollY}</div>
            </div>
            </>
        ) : (
            <>
            <div className='homepage-flex-container'>
                <GiantTimerSplash />
                <div className="padding">hello</div>
            </div>
            </>
        )
    );
}

export default Home; 