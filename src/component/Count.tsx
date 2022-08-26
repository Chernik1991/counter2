import React from 'react';
import s from './Count.module.css'
import {Button} from './Button';
import {Input} from './Input';
import {incAC, resetAC, setStateType} from '../store/setReduser';
import {useDispatch} from 'react-redux';

type CountPropsType = {
    set: setStateType
    // disableSet:boolean
    // maxValue: number,
    // minValue: number,
    // value: number,
    // reset: () => void,
    // inc: () => void,
    // mistake: string,
}
export const Count = ({set}: CountPropsType) => {
    const dispatch = useDispatch();
    const {mistake,minValue,maxValue,value} = set;
    const reset = () => {
        const action = resetAC(minValue);
        dispatch(action);
    }
    const inc = () => {
        const action = incAC(value, maxValue);
        dispatch(action);
    }

    return (
        <div className={s.Count}>
            <Input
                value={mistake}
                className={
                    (((value === maxValue))
                    ||(mistake==='Incorrect value'))
                    &&!(mistake==='enter values and press \'set\'')
                        ? s.InputOff
                        : s.Input}
            />
            <div>
                <div className={s.ButtonBorder}>
                    <div className={s.ButtonLi}>

                        <Button
                            disable={(((value === maxValue))
                                    ||(mistake==='Incorrect value'))
                                ||(mistake==='enter values and press \'set\'')}
                            callback={inc}
                            className={s.Button}
                            name={'INC'}/>
                    </div>
                    <div className={s.ButtonLi}>
                        <Button
                            disable={value === minValue}
                            callback={reset}
                            className={s.Button}
                            name={'RESET'}/>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};