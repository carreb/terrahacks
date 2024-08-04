import React, { useState, useEffect } from "react";
import timelineItems from './HISTORICAL_TIMELINE.js';
import "./timeline.css";

const Timeline = () => {

    useEffect(() => {
        const timelineContainer = document.querySelector('.timeline-line');
        const currentYearIndex = timelineItems.findIndex(event => event.year === 2024);
        const totalEvents = timelineItems.length;
        const percentage = ((currentYearIndex / totalEvents) * 100) - 1;

        if (timelineContainer) {
            timelineContainer.style.setProperty('--red-end', percentage);
        }
    }, []);

    const [openCard, setOpenCard] = useState(null);

    const openNewCard = (index) => {
        let currentlyOpenCard = document.getElementById(`card-${openCard}`);
        if (currentlyOpenCard) {
            currentlyOpenCard.style.display = 'none';
        }
        setOpenCard(index);
        let newCard = document.getElementById(`card-${index}`);
        if (newCard) {
            newCard.style.display = 'block';
        }
        // Scroll to the card
        window.scrollTo(0, newCard.offsetTop - newCard.offsetHeight - 350);
    }

    return (
        <>
        <div className="title-container">
            <h1 className="large-title">TIME IS RUNNING OUT</h1>
        <p className="large-subtitle">We have limited time to reduce emissions before the effects of climate change become <b>irreversible.</b> Click on the years to learn more.</p>
        </div>
        <div className="timeline-container">
            <div className="timeline-line">
                {/* {timelineItems.map((item, index) => (
                    <div className="timeline-dot">item</div>
                ))} */}
            </div>
            <ol className="timeline">
                {timelineItems.map((item, index) => (
                    <li className="timeline-item" >
                        {(item.year % 500 == 0 || item.hasCard) ? <div><span className={item.hasCard ? "item-title clickable-timeline-element" : "item-title"} onClick={() => openNewCard(index)}>{item.title}</span>{item.hasCard ? <><span> - </span><span className="timeline-card-title">{item.cardTitle}</span></> : ''}</div> : ''}
                        {/* Conditional rendering if the timeline item has a card, show the title of the card. */}
                    </li>
                ))}
            </ol>
            <div className="timeline-cards">
                {timelineItems.map((item, index) => (
                    item.hasCard ? <div className="timeline-card" id={`card-${index}`}>
                        <h2>{item.cardTitle}</h2>
                        <p>{item.cardDetailedText}</p>
                    </div> : ''
                ))}
            </div>
        </div>
        </>
    );
}

export default Timeline;