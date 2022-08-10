import React, {useState} from 'react';
import s from './Set.module.css'

export const Set = () => {
    let [value, setValue] = useState<number>(0)
    const inc = () => {
        value = value + 1
        return setValue(value)
    }
    const res = () => {
        return setValue(0)
    }
    return (
        <div className={s.Set}>
            <div className={s.ButtonBorder}>
                <div>
                    Max value:
                    <input value={value} className={s.Input}/>
                </div>
                <div>
                    Start value:
                    <input value={0} className={s.Input}/>
                </div>
            </div>
            <div className={s.ButtonBorder}>
                <button onClick={inc} className={s.Button}>SET</button>
            </div>
        </div>
    );
};