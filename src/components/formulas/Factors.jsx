import React, { useState, useEffect } from 'react';

function Factors() {

    const [thing, setThing] = useState("hello")
    console.log(thing)

    const [humanPop, setHumanPop] = useState(10);
    const [landFloraPop, setLandFloraPop] = useState(10);
    const [landFaunaPop, setLandFaunaPop] = useState(10);

    const startTime = new Date().getTime();

    let timeElapsed = (start) => {
        const currentTime = new Date().getTime();
        return (currentTime - start) / 1000;
    }

    useEffect(() => {
        setInterval(() => {
            let elapsed = timeElapsed(startTime)
            setHumanPop(humanPop-elapsed/100)
            setLandFloraPop(landFloraPop-elapsed/50)
            setLandFaunaPop(landFaunaPop-elapsed/25)
        }, 1000);
    })

    return (
        <>
            <div>
                {humanPop} <br/>
                {landFloraPop} <br/>
                {landFaunaPop} <br/>
            </div>
        </>
    );

}

export default Factors;