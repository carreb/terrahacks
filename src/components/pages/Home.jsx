import React, { useRef, useState, useEffect } from 'react';
import '../../App.css';
import '../homepage_styles.css';
import GiantTimerSplash from '../GiantTimerSplash';
import BloodDripSVG from '../BloodDripSVG.jsx'; // ignore error? it doesn't seem to mean anything
import StickyTime from '../StickyTimer';
import Timeline from '../Timeline';
import LeftColumn from '../LeftColumn';
import RightColumn from '../RightColumn';
import { useNavigate } from 'react-router-dom';
import InteractiveTimer from '../InteractiveTimer';
import MoleshireGameCTA from '../MoleshireGameCTA.jsx'; 

const convertPxToVh = (px) => {
  return (px / window.innerHeight) * 100;
};

const convertVhToPx = (vh) => {
  return (vh / 100) * window.innerHeight;
};

function Home() {
  const scrollPosition = useRef(0);
  const lastScrollTime = useRef(0);
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(window.scrollY); // State to track scroll position for rendering

  const scrollSticky = convertVhToPx(49); // this variable controls when the sticky timer navbar thingie appears

  useEffect(() => {

    if (window.innerWidth < 290) {
        navigate('/device-does-not-meet-required-screen-size');
    }

    const handleScroll = () => {
      setScrollY(window.scrollY); // Update scrollY state

      if (window.scrollY < convertVhToPx(49)) {
        // Check if the scroll direction is down
        if (window.scrollY > scrollPosition.current) {
          // if there was a scroll event too recently, don't do anything
          if (Date.now() - lastScrollTime.current < 100) {
            return;
          }
          window.scrollTo(0, convertVhToPx(100));
          scrollPosition.current = window.scrollY;
        } else {
          scrollPosition.current = window.scrollY;
        }
      }
      lastScrollTime.current = Date.now();
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollY > scrollSticky ? (
    <>
      <div className="homepage-flex-container">
        <GiantTimerSplash />
        <BloodDripSVG />
      </div>
      <StickyTime />
      <Timeline />
      <div className='news-columns-header'>
        <h1 className='large-title' style={{
            marginTop: '0'
        }}>WHAT CAUSES CLIMATE CHANGE?</h1>
      </div>
      <div className='news-columns-container'>
        <LeftColumn />
        <RightColumn />
      </div>
      <div className='interactive-timer-div'>
        <InteractiveTimer />
      </div>
     <MoleshireGameCTA />
    </>
  ) : (
    <div className="homepage-flex-container">
      <GiantTimerSplash />
      <BloodDripSVG />
      <h1>An error occurred.</h1>
    </div>
  );
}

export default Home;
