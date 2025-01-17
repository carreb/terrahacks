import React from 'react';
import { useState, useEffect } from 'react';
import '../App.css';
import './interactive-timer.css';

function InteractiveTimer () {
    const [TIME, setTime] = useState({});

    // range 24743*0.04 = 990 to 24743*1.96 = 48496
    const [greenhouse, setGreenhouse] = useState(24743);
    // range 24743*0.99 = 24495 to 24743*1.01 = 24990
    const [absorbtion, setAbsorbtion] = useState(24743);
    // range 24743*0.97 = 24000 to 24743*1.03 = 25485
    const [natural, setNatural] = useState(24743)

    const [greenhouseSlider, setGreenhouseSlider] = useState(0)

    // 16725243600 * 1000 
    // 1576800000 * 1000 01/01/2020 
    // 15148443600 * 1000
    const [D_DAY, setD_DAY] = useState(new Date(1576800000 + greenhouse * natural * absorbtion));

    const getTimeUntilDDay = () => {
        setD_DAY(new Date(1576800000 + greenhouse * natural * absorbtion));
        let time = {};
        let currentTime = new Date().getTime();
        let timeUntil = D_DAY - currentTime;
        let years = Math.floor(timeUntil / (1000 * 60 * 60 * 24 * 365));
        timeUntil -= years * 1000 * 60 * 60 * 24 * 365;
        let months = Math.floor(timeUntil / (1000 * 60 * 60 * 24 * 30));
        timeUntil -= months * 1000 * 60 * 60 * 24 * 30;
        let days = Math.floor(timeUntil / (1000 * 60 * 60 * 24));
        timeUntil -= days * 1000 * 60 * 60 * 24;
        let hours = Math.floor(timeUntil / (1000 * 60 * 60));
        timeUntil -= hours * 1000 * 60 * 60;
        let minutes = Math.floor(timeUntil / (1000 * 60));
        timeUntil -= minutes * 1000 * 60;
        let seconds = Math.floor(timeUntil / 1000);

        // Pad out any numbers less than 10
        years = years < 10 ? '0' + years : years;
        months = months < 10 ? '0' + months : months;
        days = days < 10 ? '0' + days : days;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        time = { y: years, mo: months, d: days, h: hours, min: minutes, s: seconds };
        setTime(time);
    };

    useEffect(() => {
        const intervalId = setInterval(getTimeUntilDDay, 1000);
        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []); // Empty dependency array to run only once on mount

    const handleGreenhouseSlider = (event) => {
        const sliderValue = parseFloat(event.target.value);
        console.log(sliderValue);
        console.log(24743 - (24743 * 0.96 * sliderValue/ 100))
        setGreenhouse(24743 - (24743 * 0.96 * sliderValue/ 100))
        console.log(greenhouse)
        setD_DAY(new Date(1576800000 + greenhouse * natural * absorbtion));
        console.log(D_DAY)
    }

    const handleAbsorbtionSlider = (event) => {
        const sliderValue = parseFloat(event.target.value);
        console.log(sliderValue);
        console.log(24743 - (24743 * 0.03 * sliderValue/ 100))
        setGreenhouse(24743 - (24743 * 0.03 * sliderValue/ 100))
        setD_DAY(new Date(1576800000 + greenhouse * natural * absorbtion));
        console.log(D_DAY)
    }

    const handleNaturalSlider = (event) => {
        const sliderValue = parseFloat(event.target.value);
        console.log(sliderValue);
        console.log(24743 - (24743 * 0.01 * sliderValue/ 100))
        setGreenhouse(24743 - (24743 * 0.01 * sliderValue/ 100))
        setD_DAY(new Date(1576800000 + greenhouse * natural * absorbtion));
        console.log(D_DAY)
    }

    useEffect(() => {
        getTimeUntilDDay()
    }, [D_DAY])

    return (
        <>
            <div className='i-hero-section giant-timer'>
                <div className='title-area'>
                    <h1 className='smaller-title'>Take it Into Your Own Hands</h1>
                    <p className='large-subtitle'>See what happens to the doomsday clock when you change any of the parameters mentioned above</p>
                </div>
                <div className='sliders'>
                    <div className="slidecontainer">
                        <label htmlFor="greenhouseGases">Greenhouse Gases</label>
                        <input type="range" min="-100" max="100" className="slider" id="greenhouseGases" onChange={handleGreenhouseSlider} />
                    </div>
                    <div className="slidecontainer">
                        <label htmlFor="Absorbtion">Absorbtion</label>
                        <input type="range" min="-100" max="100" className="slider" id="Absorbtion" onChange={handleAbsorbtionSlider} />
                    </div>
                    <div className="slidecontainer">
                        <label htmlFor="NaturalChanges">Natural Changes</label>
                        <input type="range" min="-100" max="100" className="slider" id="NaturalChanges" onChange={handleNaturalSlider}/>
                    </div>
                </div>
                <h3 className='i-hero-section-flair-text'>YOUR SCENARIO HAS</h3>
                <h1 className="i-timer-text i-giant-timer">
                    {TIME.y}<span className="i-time-subsection i-giant-timer">years</span>
                    {TIME.mo}<span className="i-time-subsection i-giant-timer">months</span>
                    {TIME.d}<span className="i-time-subsection i-giant-timer">days</span>
                    {TIME.h}<span className="i-time-subsection i-giant-timer">hours</span>
                    {TIME.min}<span className="i-time-subsection i-giant-timer">minutes</span>
                    {TIME.s}<span className="i-time-subsection i-giant-timer">seconds</span>
                </h1>
                <h3 className='i-hero-section-flair-text'>BEFORE IT IS COMPLETELY UNINHABITABLE.</h3>
            </div>
        </>
    );
}

export default InteractiveTimer;