import React from 'react';
import s from './Count.module.css'
import {Button} from './Button';
import {Input} from './Input';

type CountPropsType = {
    disableSet:boolean
    maxValue: number,
    minValue: number,
    value: number,
    reset: () => void,
    inc: () => void,
    mistake: string,
}

export const Count = (props: CountPropsType) => {
    return (
        <div className={s.Count}>
            <Input
                value={props.mistake}
                className={
                    (((props.value ===props.maxValue))
                    ||(props.mistake==='Incorrect value'))
                    &&!(props.mistake==='enter values and press \'set\'')
                        ? s.InputOff
                        : s.Input}
            />
            <div>
                <div className={s.ButtonBorder}>
                    <div className={s.ButtonLi}>

                        <Button
                            disable={(props.value === props.maxValue)||(props.mistake==='Incorrect value')}
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