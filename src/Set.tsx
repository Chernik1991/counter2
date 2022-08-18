import React, {ChangeEvent} from 'react';
import s from './Set.module.css'
import {Button} from './component/Button';
import {Input} from './component/Input';

type SetPropsType = {
    minValueSetSet:number,
    setMinValueSet:(value:string)=>void,
    maxValueSetSet:number,
    setMaxValueSet:(value:string)=>void,
    setButton: () => void,
    disableButton:()=>void
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
                        value={String(props.maxValueSetSet)}
                        className={s.Input}
                        type={'number'}
                    />
                </div>
                <div>
                    Start value:
                    <Input
                        onChange={onChangeTitleMin}
                        value={String(props.minValueSetSet)}
                        className={s.Input}
                        type={'number'}
                    />
                </div>
            </div>
            <div className={s.ButtonBorder}>
                <Button
                    disable={Boolean(props.disableButton())}
                    callback={() => props.setButton()}
                    className={s.Button}
                    name={'SET'}/>
            </div>
        </div>
    );
};