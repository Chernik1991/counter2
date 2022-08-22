import React from 'react';
import {Count} from './component/Count';
import {Set} from './component/Set';
import './App.css'
import {DisableButtonAC, incAC, MaxValueSetSetAC, MinValueSetSetAC, resetAC, setButtonAC} from './store/setReduser';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootState, store} from './store/state';

export const App = () => {
    const dispatch = useDispatch();
    const set=useSelector<AppRootState>(state=>state.set)
    // let [maxValue, setMaxValue] = useState<number>(1);
    // let [minValue, setMinValue] = useState<number>(0);
    // let [value, setValue] = useState<number>(minValue);
    // let [mistake, setMistake] = useState<string>(String(minValue));
    // let [maxValueSet, setMaxValueSet] = useState<number>(maxValue);
    // let [minValueSet, setMinValueSet] = useState<number>(minValue);
    const state = store.getState().set
    const maxValue = store.getState().set.maxValue
    const minValue = store.getState().set.minValue
    const value = store.getState().set.value
    const mistake = store.getState().set.mistake
    const maxValueSet = store.getState().set.maxValueSet
    const minValueSet = store.getState().set.minValueSet
    const disableSet = store.getState().set.disableSet


    const MaxValueSetSet = (value: string) => {
        const action = MaxValueSetSetAC(value);
        dispatch(action);
        console.log(value)
    }
    const MinValueSetSet = (value: string) => {
        const action = MinValueSetSetAC(value,minValueSet);
        dispatch(action);
        console.log(value)
    }
    const disableButton = () => {
        const action = DisableButtonAC(maxValueSet, minValueSet, maxValue, minValue);
        dispatch(action);
    }
    const setButton = () => {
        const action = setButtonAC(maxValueSet, minValueSet);
        dispatch(action);
        console.log(maxValueSet)
        console.log(minValueSet)
        console.log(value)
    }
    const reset = () => {
        const action = resetAC(minValue);
        dispatch(action);
    }
    const inc = () => {
        const action = incAC(value, maxValue);
        dispatch(action);
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
                    mistake={mistake}
                />
            </div>
        </div>
    );
}
