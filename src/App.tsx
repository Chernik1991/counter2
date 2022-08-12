import React, {useState} from 'react';
import {Count} from './Count';
import {Set} from './Set';
import './App.css'

export const App = () => {
    let [maxValue,setMaxValue]=useState(6);
    const inca = () => {
        maxValue = maxValue + 1
        return setMaxValue(maxValue)
    }
    let [minValue,setMinValue]=useState(2);
    const inca2 = () => {
        minValue = minValue + 1
        return setMinValue(minValue)
    }
    return (
        <div className="App1">
            <div className="App"><Set startValue={minValue} maxValue={maxValue} inca={inca} inca2={inca2}/></div>
            <div className="App"><Count maxValue={maxValue} startValue={minValue}/></div>
        </div>
    );
}
