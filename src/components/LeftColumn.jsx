import React from "react";
import "./column.css";

const LeftColumn = () => {
    return (
        <div className="homepage-news-column">
            <div className="left-section">
                <h1>GREENHOUSE GASES</h1>
                <p>
                    Greenhouse gases are by far the greatest contributors of climate change.
                    To stop climate change, greenhouse gas emissions need to be reduced to net zero worldwide.
                    The four primary greenhouse gases are carbon dioxide (CO2), methane, nitrous oxide, and fluorinated gases.
                    Carbon Dioxide is the largest contributor, where over 30 billion tons of gas are released by humans every year.
                    Since pre industrial times, net carbon dioxide concentrations have increased by 40%, with most of increase occuring in the 21st and late 20th centrury.
                    Major common sources include burning coal and other fossil fuels and cutting down forests.
                </p>
                <img src="https://via.placeholder.com/500x300" alt="" className="float-image-left" />
            </div>
            <div className="right-section">
                <p>
                    Methane is the second most generated greenhouse gas, where modern concentrations are 2.5x more than their pre industrial concentrations.
                    The primary souces of emission of methane gas are from dairy farms and from melting glaciers and ice caps.
                    Another common greeenhouse gas is nitrous oxide, which has risen 20% since pre industrial times.
                    Synthetic and organic fertalizers both release nitrous oxide into the atmosphere, as does manure and the burning of agricultural residues.
                    The least commonly understood cause of greenhouse gases come from the various household products that release fluorinated gases.
                    Fluorinated gases have a 23000 times more potent warming effect than carbon dioxide, and can be released from fridges, air conditioners, insulation, and electrical distribution.
                </p>
                <img src="https://via.placeholder.com/500x300" alt="" className="float-image-right" />
            </div>
        </div>
    )
}

export default LeftColumn;
