import React, {useState} from 'react';
import s from './Set.module.css'
import {Button} from './component/Button';
import {Input} from './component/Input';

type SetPropsType={
    startValue:number,
    maxValue:number,
    inca:()=>void
    inca2:()=>void
}
export const Set = (props:SetPropsType) => {

    return (
        <div className={s.Set}>
            <div className={s.ButtonBorder}>
                <div>
                    Max value:
                    <Input type={"number"} value={props.maxValue} className={s.Input}/>
                </div>
                <div>
                    Start value:
                    <Input type={"number"} value={props.startValue} className={s.Input}/>
                </div>
            </div>
            <div className={s.ButtonBorder}>
                <Button callback={props.inca} className={s.Button} name={'SET'}/>
                <Button callback={props.inca2} className={s.Button} name={'SET'}/>
            </div>
        </div>
    );
};