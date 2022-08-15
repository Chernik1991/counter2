import React, {ChangeEvent, useState} from 'react';
import {Count} from './Count';
import {Set} from './Set';
import './App.css'

export const App = () => {
    let [maxValue, setMaxValue] = useState(6);
    let [minValue, setMinValue] = useState(2);

    const setButton = (maxValue: number, minValue: number) => {
        setMaxValue(maxValue)
        setMinValue(minValue)
        reset()
    }
    const reset = () => {
        return true
    }

    return (
        <div className="App1">
            <div className="App">
                <Set
                    maxValue={maxValue}
                    minValue={minValue}
                    setButton={setButton}
                />
            </div>
            <div className="App"><Count maxValue={maxValue} minValue={minValue} reset={reset}/></div>
        </div>
    );
}
