import React, {useState} from 'react';
import {Count} from './component/Count';
import {Set} from './component/Set';
import './App.css'

export const App = () => {
    let [maxValue, setMaxValue] = useState(1);//set max count
    let [minValue, setMinValue] = useState(0);// set min count
    let [value, setValue] = useState<number>(minValue); // счетчик
    let [mistake, setMistake] = useState<string>(String(minValue)); //сет ошибки
    let [minValueSet, setMinValueSet] = useState<number>(minValue)//забираю значение из инпута
    let [maxValueSet, setMaxValueSet] = useState<number>(maxValue)//забираю значение из инпута

    const setMinValueSetSet = (value: string) => {
        setMinValueSet(Number(value))
    }
    // ловим значение инпута
    const setMaxValueSetSet = (value: string) => {
        setMaxValueSet(Number(value))
    }
    // ловим значение инпута
    const disableButton = () => {
        if (((minValueSet === minValue) && (maxValueSet === maxValue))
            || (incorrectValue())) {
            return true
        }
    }
    // дизейбл кнопки

    const setButton = () => {
        setMaxValue(maxValueSet) // сетаем мах значение в начальный стейт
        setMinValue(minValueSet)// сетаем мин значение в начальный стейт
        setMistake(String(value)) // передача значений в импут счетчика
        setValue(minValueSet)
        return (
            setValue(minValueSet)
        )
    }
    const reset = () => {
        setMistake(String(minValueSet))
        return (
            setValue(minValueSet)
        )
    }
    const inc = () => {
        if (value < maxValue) {
            value = value + 1
        }
        setMistake(String(value))
        return setValue(value)
    } // если значение счетчика меньше махимального то передаем значение в стэйт ошибки и возращаем это значение
    const incorrectValue = () => {
        if (minValueSet < 0) {
            setMistake('Incorrect value')
        } else if (maxValueSet <= minValueSet) {
            setMistake('Incorrect value')
        } else {
            setValue(minValueSet)
            setMistake('enter values and press \'set\'')
        }
        return ((maxValueSet <= minValueSet) || (minValueSet < 0))
    }
    return (
        <div className="App1">
            <div className="App">
                <Set
                    setButton={setButton}
                    setMinValueSetSet={setMinValueSetSet}
                    minValueSet={minValueSet}
                    setMaxValueSetSet={setMaxValueSetSet}
                    maxValueSet={maxValueSet}
                    disableButton={disableButton}
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
