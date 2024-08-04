import React from 'react';
import { useState, useEffect } from 'react';
import '../App.css';
import './interactive-timer.css';

function InteractiveTimer () {
    const [TIME, setTime] = useState({});

    // range 24743*0.04 = 990 to 24743*1.96 = 48496

    // range 24743*0.99 = 24495 to 24743*1.01 = 24990

    // range 24743*0.97 = 24000 to 24743*1.03 = 25485

    const [contributors, setContributors] = useState({
        greenhouse: 24743,
        absorbtion: 24743,
        natural: 24743
    })

    // 16725243600 * 1000
    // 1576800000 * 1000
    // 15148443600 * 1000
    const D_DAY = new Date(Date.parse("January 1st 2020") + contributors.greenhouse * contributors.natural * contributors.absorbtion * 1000);

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
            <div className='i-hero-section giant-timer'>
                <h3 className='i-hero-section-flair-text'>THE WORLD HAS</h3>
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
            <div class="slidecontainer">
                <input type="range" min="-1" max="1" value="0" class="slider" id="greenhouseGases" onChange={(props) => { const { value } = props; 
                                                                                                                            setTime({greenhouse: 24743 - (24743 * 0.96 * value)})}} />
            </div>
            <div class="slidecontainer">
                <input type="range" min="-1" max="1" value="0" class="slider" id="Absorbtion" onChange={(props) => { const { value } = props;
                                                                                                                        setTime({absorbtion: 24743 - (24743 * 0.03 * value)})}} />
            </div>
            <div class="slidecontainer">
                <input type="range" min="-1" max="1" value="0" class="slider" id="Natural Changes" onChange={(props) => { const { value } = props;
                                                                                                                            setTime({natural: 24743 - (24743 * 0.01 * value)})}} />
            </div>
        </>
    );
}

export default InteractiveTimer;