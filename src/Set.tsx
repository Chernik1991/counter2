import React, {ChangeEvent, useState} from 'react';
import s from './Set.module.css'
import {Button} from './component/Button';
import {Input} from './component/Input';

type SetPropsType = {
    maxValue: number,
    minValue: number,
    setButton: (maxValue: number, minValue: number) => void
}
export const Set = (props: SetPropsType) => {
    let [maxValue, setMaxValue] = useState<number>(props.maxValue)
    const onChangeTitleMax = (e:ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
    }
    let [minValue, setMinValue] = useState<number>(props.minValue)
    const onChangeTitleMin = (e:ChangeEvent<HTMLInputElement>) => {
        setMinValue(Number(e.currentTarget.value))
    }
    return (
        <div className={s.Set}>
            <div className={s.ButtonBorder}>
                <div>
                    Max value:
                    <Input

                        onChange={onChangeTitleMax}
                        value={String(maxValue)}
                        className={s.Input}
                        type={"number"}
                    />
                </div>
                <div>
                    Start value:
                    <Input
                        onChange={onChangeTitleMin}
                        value={String(minValue)}
                        className={s.Input}
                        type={"number"}
                    />
                </div>
            </div>
            <div className={s.ButtonBorder}>
                <Button
                    callback={()=>props.setButton(maxValue,minValue)}
                    className={s.Button}
                    name={'SET'}/>
            </div>
        </div>
    );
};