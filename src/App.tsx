import React, {useState} from 'react';
import {Count} from './Count';
import {Set} from './Set';
import './App.css'

export const App = () => {
    let [maxValue, setMaxValue] = useState(6);
    let [minValue, setMinValue] = useState(2);
    let [value, setValue] = useState<number>(minValue);
    let [mistake, setMistake] = useState<string>(String(minValue));

    const setButton = (maxValue: number, minValue: number) => {
        setMaxValue(maxValue)
        setMinValue(minValue)
        setMistake(String(value))
        return (setValue(minValue))
    }
    const reset = () => {
        setMistake(String(minValue))
        return (
            setValue(minValue)

        )
    }
    const inc = () => {
        if (value < maxValue) {
            value = value + 1
        }
        setMistake(String(value))
        return setValue(value)
    }
    const incorrectValue = (maxValue: number, minValue: number) => {
        console.log(minValue < 0)
        console.log(maxValue <= minValue)
        if (minValue < 0) {
            setMistake('Incorrect value')
        } else if (maxValue <= minValue) {
            setMistake('Incorrect value')
        } else {
            setValue(minValue)
            setMistake('enter values and press \'set\'')
        }
        //     setValue(minValue)
        //     // setMistake(String(minValue))
        // }

        return ((maxValue <= minValue) || (minValue < 0))

    }

    return (
        <div className="App1">
            <div className="App">
                <Set
                    maxValue={maxValue}
                    minValue={minValue}
                    setButton={setButton}
                    incorrectValue={incorrectValue}
                />
            </div>
            <div className="App">
                <Count
                    maxValue={maxValue}
                    minValue={minValue}
                    reset={reset}
                    inc={inc}
                    value={value}
                    valueResult={mistake}
                /></div>
        </div>
    );
}
