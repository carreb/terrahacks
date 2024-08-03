import React, { useState, useEffect } from 'react';
    
const startTime = new Date().getTime();

function Factors() {

    // Energy sources
    const [nonRenewable, setNonRenewable] = useState(0);
    const [renewable, setRenewable] = useState(0);

    // Agriculture
    const [hunting, setHunting] = useState(100);
    const [fishing, setFishing] = useState(100);
    const [farming, setFarming] = useState(100);

    // Populations
    const [humanPop, setHumanPop] = useState(10);
    const [landFloraPop, setLandFloraPop] = useState(100);
    const [landFaunaPop, setLandFaunaPop] = useState(100);
    const [marineFloraPop, setMarineFloraPop] = useState(100);
    const [marineFaunaPop, setMarineFaunaPop] = useState(100);

    // Energy quota
    const [energyQuota, setEnergyQuota] = useState(0);

    // Temperature change
    const [temperature, setTemperature] = useState(0);

    // Time
    const [elapsed, setElapsed] = useState(0);



    // Gains
    let K_food = (hunting + fishing + farming) / 100;
    let K_human = 1
    let K_energyQuota = (energyQuota > humanPop * 1.5) ? (0) : ((humanPop * 1.5 - energyQuota)/100)
    let K_energy = 2
    let K_T = 3 - (landFloraPop + marineFloraPop)/100
    let K_landFauna = 5
    let K_hunting = hunting / 50
    let K_landFlora = 5
    let K_landFaunaPop = landFaunaPop / 1000
    let K_marineFauna = 5
    let K_fishing = fishing / 50
    let K_marineFlora = 5
    let K_marineFaunaPop = landFaunaPop / 1000  
    let K_Temp = 2

    let timeElapsed = (start) => {
        const currentTime = new Date().getTime();
        console.log(currentTime)
        console.log(Math.round((currentTime - start)/1000))
        return Math.round((currentTime - start)/1000);
    }

    let update = () => {
        // Relationships
        setHumanPop(Math.round(K_food-K_human-K_energyQuota)*humanPop);
        setLandFaunaPop(Math.round(K_landFauna-K_hunting-K_T)*landFaunaPop);
        setLandFloraPop(Math.round(K_landFlora-K_landFaunaPop-K_T)*landFloraPop);
        setMarineFaunaPop(Math.round(K_marineFauna-K_fishing-K_T)*landFaunaPop);
        setMarineFloraPop(Math.round(K_marineFlora-K_marineFaunaPop-K_T)*landFloraPop);
        setEnergyQuota(Math.round(humanPop*K_energy))
        setTemperature(K_Temp-K_marineFaunaPop-K_marineFloraPop)
    }

    useEffect(() => {
        setInterval(() => {
            setElapsed(timeElapsed(startTime));
            update();
        }, 1000);
    });


    return (
        <>
            <div>
                Non Renewable: {nonRenewable} <br/>
                Renewable: {renewable} <br/>
                Hunting units: {hunting} <br/>
                Fishign units: {fishing} <br/>
                Farming units: {farming} <br/>  
                Human population: {humanPop} <br/>
                Land flora population: {landFloraPop} <br/>
                Land fauna population: {landFaunaPop} <br/>
                Marine flora population: {marineFloraPop} <br/>
                Marine fauna population: {marineFaunaPop} <br/>
                Energy Quota: {energyQuota} <br/>
                Temperature: {temperature} <br/>
                Time passed: {elapsed} <br/>
            </div>
        </>
    );

}

export default Factors;