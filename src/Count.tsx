import React from 'react';
import s from './Count.module.css'
import {Button} from './component/Button';
import {Input} from './component/Input';

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
                    props.value === props.maxValue
                        ? s.InputOff
                        : s.Input}/>
            <div>
                <li className={s.ButtonBorder}>
                    <li className={s.ButtonLi}>

                        <Button
                            disable={props.value === props.maxValue}
                            callback={props.inc}
                            className={s.Button1}
                            name={'INC'}/>
                    </li>
                    <li className={s.ButtonLi}>
                        <Button
                            disable={props.value === props.minValue}
                            callback={props.reset}
                            className={s.Button2}
                            name={'RESET'}/>
                    </li>
                </li>
            </div>
        </div>
    )
        ;
};