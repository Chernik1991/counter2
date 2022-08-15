import React, {useState} from 'react';
import s from './Count.module.css'
import {Button} from './component/Button';
import {Input} from './component/Input';

type CountPropsType = {
    maxValue: number,
    minValue: number,
    reset:()=>void
}

export const Count = (props: CountPropsType) => {
    let [value, setValue] = useState<number>(props.minValue)
    const inc = () => {
        if (value < props.maxValue) {
            value = value + 1
        }
        return setValue(value)
    }
    const res = () => {
        if(props.reset){
        return (
            setValue(props.minValue)
        )}
    }
    return (
        <div className={s.Count}>
            <Input
                value={String(value)}
                className={
                    value === props.maxValue
                        ? s.InputOff
                        : s.Input}/>
            <div>
                <li className={s.ButtonBorder}>
                    <li className={s.ButtonLi}>

                        <Button
                            disable={value === props.maxValue}
                            callback={inc}
                            className={s.Button1}
                            name={'INC'}/>
                    </li>
                    <li className={s.ButtonLi}>
                        <Button
                            disable={value === props.minValue}
                            callback={res}
                            className={s.Button2}
                            name={'RESET'}/>
                    </li>
                </li>
            </div>
        </div>
    )
        ;
};