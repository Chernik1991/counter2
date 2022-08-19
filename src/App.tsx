import React, {useState} from 'react';
import {Count} from './component/Count';
import {Set} from './component/Set';
import './App.css'

export const App = () => {
    let [maxValue, setMaxValue] = useState<number>(1);
    let [minValue, setMinValue] = useState<number>(0);
    let [value, setValue] = useState<number>(minValue);
    let [mistake, setMistake] = useState<string>(String(minValue));
    let [maxValueSet, setMaxValueSet] = useState<number>(maxValue);
    let [minValueSet, setMinValueSet] = useState<number>(minValue);

    const MaxValueSetSet = (value: string) => {
        setMaxValueSet(Number(value))
    }
    const MinValueSetSet = (value: string) => {
        setMinValueSet(Number(value))
    }
    const disableButton=()=>{
        if (((minValueSet === minValue) && (maxValueSet === maxValue))
            ||(incorrectValue(maxValueSet, minValueSet))){
            return true
        }
    }
    const setButton = () => {
        setMaxValue(maxValueSet)
        setMinValue(minValueSet)
        setMistake(String(value))
        return (
            setValue(minValueSet)
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
                    minValueSet={minValueSet}
                    setMinValueSet={MinValueSetSet}
                    maxValueSet={maxValueSet}
                    setMaxValueSet={MaxValueSetSet}
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
