import React from "react";
import { useNavigate } from "react-router-dom";
import './moleshire_cta.css';

const MoleshireGameCTA = () => {

    const navigate = useNavigate();

    return (
        <div className="moleshire-cta">
            <h1 className="smaller-title">Play a Live Simulation</h1>
            <p className="large-subtitle">Take control over the fictional island of Moleshire and try to prevent climate change from eradicating civilization and animal populations, along with keeping society from collapsing! Experience exactly why it's so hard to create action with regards to Climate Change issues.</p>
            <button onClick={navigate("/Sim")}>PLAY NOW!</button>
        </div>
    )
}

export default MoleshireGameCTA