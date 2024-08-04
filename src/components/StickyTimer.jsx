import React, { useState, useEffect } from 'react';
import './sticky_timer.css';

function StickyTimer() {
    const [TIME, setTime] = useState({});

    const D_DAY = new Date(16725243600 * 1000);

    let getTimeUntilDDay = () => {
        let time = {}
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
        seconds = seconds < 10 ? '0' + seconds : seconds
        // goated code
        time = {y: years, mo: months, d: days, h: hours, min: minutes, s: seconds};
        setTime(time);
    }
    let isTimePlural = (time) => {
        return time > 1 ? 's' : '';
    }

    const onMobileScreen = () => {
        return window.innerWidth < 530;
    }

    useEffect(() => {
        getTimeUntilDDay();
        setInterval(() => {
            getTimeUntilDDay();
        }, 1000);
    }, [])

    return (
        <>
            <div className='sticky-timer'>
                <p className='sticky-timer-flair-text' style={
                    {marginRight: '5px'}
                }>EARTH HAS</p>
                    <span className='sticky-timer-text'>{TIME.y}</span>
                    <span className='sticky-timer-subsection'>{onMobileScreen() ? ":" : `year${isTimePlural(TIME.y)}`}</span>
                    <span className='sticky-timer-text'>{TIME.mo}</span>
                    <span className='sticky-timer-subsection'>{onMobileScreen() ? ":" : `month${isTimePlural(TIME.mo)}`}</span>
                    <span className='sticky-timer-text'>{TIME.d}</span>
                    <span className='sticky-timer-subsection'>{onMobileScreen() ? ":" : `day${isTimePlural(TIME.d)}`}</span>
                    <span className='sticky-timer-text'>{TIME.h}</span>
                    <span className='sticky-timer-subsection'>{onMobileScreen() ? ":" : `hour${isTimePlural(TIME.h)}`}</span>
                    <span className='sticky-timer-text'>{TIME.min}</span>
                    <span className='sticky-timer-subsection'>{onMobileScreen() ? ":" : `minute${isTimePlural(TIME.min)}`}</span>
                    <span className='sticky-timer-text'>{TIME.s}</span>
                    <span className='sticky-timer-subsection'>{onMobileScreen() ? "" : `second${isTimePlural(TIME.s)}`}</span>
                <p className='sticky-timer-flair-text' style={
                    {marginLeft: '5px'}
                }>LEFT.</p>    
            </div>

        </>
    );

}

export default StickyTimer