import React, { useState, useEffect } from 'react';
import '../../App.css';
import '../homepage_styles.css';
import GiantTimerSplash from '../GiantTimerSplash';
import BloodDripSVG from '../BloodDripSVG.jsx'; // ignore error? it doesn't seem to mean anything
import StickyTime from '../StickyTimer';


const convertPxToVh = (px) => {
    return px / window.innerHeight * 100;
}

const convertVhToPx = (vh) => {
    return vh / 100 * window.innerHeight;
}

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollSticky = convertVhToPx(49); // this variable controls when the sticky timer navbar thingie appears

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    scrollPosition > scrollSticky ? (
      <>
        <div className='homepage-flex-container'>
          <GiantTimerSplash />
          <BloodDripSVG />
        </div>
        <StickyTime />
      </>
    ) : (
      <div className='homepage-flex-container'>
        <GiantTimerSplash />
        <BloodDripSVG />
      </div>
    )
  );
}

export default Home;
