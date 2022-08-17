import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Set.module.css'
import {Button} from './component/Button';
import {Input} from './component/Input';

type SetPropsType = {
    maxValue: number,
    minValue: number,
    setButton: (maxValue: number, minValue: number) => void
    incorrectValue: (maxValue: number, minValue: number) => boolean
}

export const Set = (props: SetPropsType) => {
    let [maxValueSet, setMaxValueSet] = useState<number>(props.maxValue)
    const onChangeTitleMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValueSet(Number(e.currentTarget.value))
    }
    let [minValueSet, setMinValueSet] = useState<number>(props.minValue)
    const onChangeTitleMin = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValueSet(Number(e.currentTarget.value))
    }
    useEffect(() => {
        let maxValueStart = localStorage.getItem('maxValueStart')
        if (maxValueStart) {
            setMaxValueSet(JSON.parse(maxValueStart))
        }
    }, [])
    useEffect(() => {
        let minValueStart = localStorage.getItem('minValueStart')
        if (minValueStart) {
            let newMinValueStart=JSON.parse(minValueStart)
            setMinValueSet(newMinValueStart)
        }
    }, [])
       return (
        <div className={s.Set}>
            <div className={s.ButtonBorder}>
                <div>
                    Max value:
                    <Input
                        onChange={onChangeTitleMax}
                        value={String(maxValueSet)}
                        className={s.Input}
                        type={'number'}
                    />
                </div>
                <div>
                    Start value:
                    <Input
                        onChange={onChangeTitleMin}
                        value={String(minValueSet)}
                        className={s.Input}
                        type={'number'}
                    />
                </div>
            </div>
            <div className={s.ButtonBorder}>
                <Button
                    disable={
                        ((minValueSet === props.minValue) && (maxValueSet === props.maxValue))
                        ||(props.incorrectValue(maxValueSet, minValueSet))
                    }
                    callback={() => props.setButton(maxValueSet, minValueSet)}
                    className={s.Button}
                    name={'SET'}/>
            </div>
        </div>
    );
};