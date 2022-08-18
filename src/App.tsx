import React, {useState} from 'react';
import {Count} from './Count';
import {Set} from './Set';
import './App.css'

export const App = () => {
    let [maxValue, setMaxValue] = useState(1);
    let [minValue, setMinValue] = useState(0);
    let [value, setValue] = useState<number>(minValue);
    let [mistake, setMistake] = useState<string>(String(minValue));
    let [maxValueSetSet, setMaxValueSetSet] = useState<number>(maxValue);
    let [minValueSetSet, setMinValueSetSet] = useState<number>(minValue);

    const setMaxValueSet = (value: string) => {
        setMaxValueSetSet(Number(value))
    }
    const setMinValueSet = (value: string) => {
        setMinValueSetSet(Number(value))
    }
    const disableButton=()=>{
        if (((minValueSetSet === minValue) && (maxValueSetSet === maxValue))
            ||(incorrectValue(maxValueSetSet, minValueSetSet))){
            return true
        }
    }
    const setButton = () => {
        setMaxValue(maxValueSetSet)
        setMinValue(minValueSetSet)
        setMistake(String(value))
        return (
            setValue(minValueSetSet)
        )
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
            return true
        } else if (maxValue <= minValue) {
            setMistake('Incorrect value')
            return true
        } else {
            setValue(minValue)
            setMistake('enter values and press \'set\'')
            return false
        }

        // return ((maxValue <= minValue) || (minValue < 0))

    }
    return (
        <div className="App1">
            <div className="App">
                <Set
                    disableButton={disableButton}
                    minValueSetSet={minValueSetSet}
                    setMinValueSet={setMinValueSet}
                    maxValueSetSet={maxValueSetSet}
                    setMaxValueSet={setMaxValueSet}
                    setButton={setButton}
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
                />
            </div>
        </div>
    );
}
