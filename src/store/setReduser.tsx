import {combineReducers, createStore} from 'redux';
import {useState} from 'react';


export type setStateType={
    maxValue:number,
    minValue:number,
    value:number,
    mistake:string,
    maxValueSet:number,
    minValueSet:number,
}

const initialState: setStateType={
    maxValue:1,
    minValue:0,
    value:0,
    mistake:'0',
    maxValueSet:0,
    minValueSet:0,
}
export const setReducer=(state:setStateType=initialState,action:ReducerType)