import React, {useEffect, useState} from 'react';
import {Count} from './Count';
import {Set} from './Set';
import './App.css'

export const App = () => {
    let [maxValue, setMaxValue] = useState(1);
    let [minValue, setMinValue] = useState(0);
    let [value, setValue] = useState<number>(minValue);
    let [mistake, setMistake] = useState<string>(String(minValue));

    useEffect(() => {
        let maxValueStart = localStorage.getItem('maxValue')
        if (maxValueStart) {
            setMaxValue(JSON.parse(maxValueStart))
        }
    }, [])
    useEffect(() => {
        let minValueStart = localStorage.getItem('minValue')
        if (minValueStart) {
            let newMinValueStart=JSON.parse(minValueStart)
            setMinValue(newMinValueStart)
        }
    }, [])
    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    // }, [])
    // useEffect(() => {
    //
    //     localStorage.setItem('minValue', JSON.stringify(minValue))
    // }, [])

    const setButton = (maxValue: number, minValue: number) => {
        setMaxValue(maxValue)
        setMinValue(minValue)
        setMistake(String(value))
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
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

        if (minValue < 0) {
            setMistake('Incorrect value')
        } else if (maxValue <= minValue) {
            setMistake('Incorrect value')
        } else {
            setValue(minValue)
            setMistake('enter values and press \'set\'')
        }

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
