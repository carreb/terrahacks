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
            console.log(elapsed)
            setHumanPop(humanPop-elapsed)
            console.log(humanPop)
        }, 1000);
    })

    return (
        <>
            <div>
                {thing}
            </div>
        </>
    );

}

export default Factors;