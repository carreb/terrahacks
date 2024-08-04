import React, { useState, useEffect } from 'react';
import '../App.css';
import './interactive-timer.css';

function GiantTimerSplash () {
    const [TIME, setTime] = useState({});

    const [co2, setCo2] = useState()
    const [methane, setMethane] = useState()
    const [n2o, setN2o] = useState()
    const [fluoride, setFluoride] = useState()
    const [natural, setNatural] = useState()
    const [absorbtion, setAbsorbtion] = useState()

    const D_DAY = new Date(Date.parse("January 1st 2020") + co2 * methane * n2o * fluoride * natural * absorbtion * 1000);

    const getTimeUntilDDay = () => {
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
        getTimeUntilDDay();
        const intervalId = setInterval(getTimeUntilDDay, 1000);
        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []); // Empty dependency array to run only once on mount

    return (
        <>
            <div className='hero-section giant-timer'>
                <h3 className='hero-section-flair-text'>THE WORLD HAS</h3>
                <h1 className="timer-text giant-timer">
                    {TIME.y}<span className="time-subsection giant-timer">years</span>
                    {TIME.mo}<span className="time-subsection giant-timer">months</span>
                    {TIME.d}<span className="time-subsection giant-timer">days</span>
                    {TIME.h}<span className="time-subsection giant-timer">hours</span>
                    {TIME.min}<span className="time-subsection giant-timer">minutes</span>
                    {TIME.s}<span className="time-subsection giant-timer">seconds</span>
                </h1>
                <h3 className='hero-section-flair-text'>BEFORE IT IS COMPLETELY UNINHABITABLE.</h3>
            </div>
            <div className='hero-section-smaller giant-timer'>
                <h3 className='hero-section-flair-text'>AND THE NEXT</h3>
                <h1 className='timer-text giant-timer'>{getYearsUntilCutoffDay()} YEARS</h1>
                <h3 className='hero-section-flair-text'>ARE THE MOST IMPORTANT.</h3>
            </div>
        </>
    );
}

export default GiantTimerSplash;