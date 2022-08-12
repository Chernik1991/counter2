import React, {useState} from 'react';
import s from './Count.module.css'
import {Button} from './component/Button';
import {Input} from './component/Input';

type CountPropsType={
    maxValue:number,
    startValue:number,
}

export const Count = (props: CountPropsType) => {
    let [value, setValue] = useState<number>(props.startValue)
    const inc = () => {
        debugger
        if (value < props.maxValue) {
            value = value + 1
        }
        return setValue(value)
    }
    const res = () => {
        return setValue(props.startValue)
    }
    return (
        <div className={s.Count}>
            <Input value={value} className={s.Input} />
            <div>
                <li className={s.ButtonBorder}>
                    <li className={s.ButtonLi}>
                        <Button callback={inc} className={s.Button1} name={'INC'}/>
                    </li>
                    <li className={s.ButtonLi}>
                        <Button callback={res} className={s.Button2} name={'RESET'}/>
                    </li>
                </li>
            </div>
        </div>
    )
        ;
};