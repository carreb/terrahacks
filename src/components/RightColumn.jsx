import React from "react";
import "./column.css";

const LeftColumn = () => {
    return (
        <div className="homepage-news-column">
            <div className="left-section">
                <h1>Other sources</h1>
                <p>
                    Greenhouse gases contribute a lot to climate change, but there are many other causes.
                    Of the more impactful changes is absorbtion.
                    Objects that are darker in colour absorb more light, which contributes to rising atmospheric temperatures, while objects lighter in colour reflect light, cooling the earth.
                    Currently, around 70% of the world's sunlight is being absorbed
                    While being a natural phenomenon, humans have heavily influenced it with practices of agriculture, deforestation, and road building.
                    Ice and glaciers are one of the most prominent reflectors of heat, and with rising temperatires, the melting ice cause a feedback loop that increases absorbtion, which causes more melting, which causes more absobrtion.
                    It is believed that the net effect of absorbtion on the earth is a slight cooling, it does not mean that humans in the future will tend to keep it this way, or that there are ways for us to make it have an even greater cooling effect.
                </p>
                <img src="https://via.placeholder.com/500x300" alt="" className="float-image-left" />
            </div>
            <div className="right-section">
                <p>
                    A many times overstated contributor of climate change is natural causes.
                    In fact, natural causes, ranging from variable solar strength to volcanic erruptions have only accounted for a difference in 0.1 degrees Celsius in total warming from 1890 to 2010.
                    Some say that solar variations have had the most effect on temperature changes, but satellites have been observing the sun's temperature since 1978 and have found little significant deviation.
                    Natural climate change was significantly more prevalent before the industrial revolution.
                    Most ice ages in human history can be accounted for by the slight changes in the axis of earth's rotation and its orbit, but that is a negligible factor in modern times and doesn't explain the patterns we experience today.
                    A paradoxical fact is that volcanic activity actually decrease global temperature.
                    Even though they are expelling particles such as CO2 into the atmosphere, they are suspended for much shorter times than greenhouse gases.
                    More importantly, they act as large clouds of reflectors of sunlight.
                </p>
                <img src="https://via.placeholder.com/500x300" alt="" className="float-image-right" />
            </div>
        </div>
    )
}

export default LeftColumn;
