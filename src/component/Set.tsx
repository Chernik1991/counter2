import React, {ChangeEvent} from 'react';
import s from './Set.module.css'
import {Button} from './Button';
import {Input} from './Input';

type SetPropsType = {
    setButton: () => void
    disableButton:()=>void
    setMinValueSet:(value:string)=>void
    setMaxValueSet:(value:string)=>void
    maxValueSet:number
    minValueSet:number
}

export const Set = (props: SetPropsType) => {
    const onChangeTitleMax = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValueSet(e.currentTarget.value)
    }
    const onChangeTitleMin = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinValueSet(e.currentTarget.value)
    }
       return (
        <div className={s.Set}>
            <div className={s.ButtonBorder}>
                <div>
                    Max value:
                    <Input
                        onChange={onChangeTitleMax}
                        value={String(props.maxValueSet)}
                        className={s.Input}
                        type={'number'}
                    />
                </div>
                <div>
                    Start value:
                    <Input
                        onChange={onChangeTitleMin}
                        value={String(props.minValueSet)}
                        className={s.Input}
                        type={'number'}
                    />
                </div>
            </div>
            <div className={s.ButtonBorder}>
                <Button
                    disable={
                        Boolean(props.disableButton())
                    }
                    callback={props.setButton}
                    className={s.Button}
                    name={'SET'}/>
            </div>
        </div>
    );
};