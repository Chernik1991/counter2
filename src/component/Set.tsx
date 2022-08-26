import React, {ChangeEvent} from 'react';
import s from './Set.module.css'
import {Button} from './Button';
import {Input} from './Input';
import {useDispatch} from 'react-redux';
import {MaxValueSetSetAC, MinValueSetSetAC, setButtonAC, setStateType} from '../store/setReduser';

type SetPropsType = {
    set: setStateType
}

export const Set = ({set}: SetPropsType) => {
    const dispatch = useDispatch();
    const {minValueSet, mistake, maxValueSet, disableSet} = set

    const onChangeTitleMax = (e: ChangeEvent<HTMLInputElement>) => {
        const action = MaxValueSetSetAC(e.currentTarget.value, minValueSet);
        dispatch(action);
    }
    const onChangeTitleMin = (e: ChangeEvent<HTMLInputElement>) => {
        const action = MinValueSetSetAC(e.currentTarget.value, maxValueSet);
        dispatch(action);
    }
    const setButton = () => {
        const action = setButtonAC(maxValueSet, minValueSet);
        dispatch(action);
    }
    return (
        <div className={s.Set}>
            <div className={s.ButtonBorder}>
                <div>
                    Max value:
                    <Input
                        onChange={onChangeTitleMax}
                        value={String(maxValueSet)}
                        className={
                            (mistake === 'Incorrect value')
                                ? s.InputOff
                                : s.Input}
                        type={'number'}
                    />
                </div>
                <div>
                    Start value:
                    <Input
                        onChange={onChangeTitleMin}
                        value={String(minValueSet)}
                        className={
                            (mistake === 'Incorrect value')
                                ? s.InputOff
                                : s.Input}
                        type={'number'}
                    />
                </div>
            </div>
            <div className={s.ButtonBorder}>
                <Button
                    disable={disableSet}
                    callback={setButton}
                    className={s.Button}
                    name={'SET'}/>
            </div>
        </div>
    );
};