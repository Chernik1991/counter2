import React from 'react';
import s from './Count.module.css'
import {Button} from './Button';
import {Input} from './Input';

type CountPropsType = {
    maxValue: number,
    minValue: number,
    value: number,
    reset: () => void,
    inc: () => void,
    valueResult: string,
}

export const Count = (props: CountPropsType) => {
    return (
        <div className={s.Count}>
            <Input
                value={props.valueResult}
                className={
                    (props.value ===props.maxValue)
                        ? s.InputOff
                        : s.Input}
            />
            <div>
                <div className={s.ButtonBorder}>
                    <div className={s.ButtonLi}>

                        <Button
                            disable={props.value === props.maxValue}
                            callback={props.inc}
                            className={s.Button1}
                            name={'INC'}/>
                    </div>
                    <div className={s.ButtonLi}>
                        <Button
                            disable={props.value === props.minValue}
                            callback={props.reset}
                            className={s.Button2}
                            name={'RESET'}/>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};