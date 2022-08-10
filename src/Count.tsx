import React, {useState} from 'react';
import s from'./Count.module.css'
export const Count = () => {
    let [value, setValue] = useState<number>(0)
    const inc = () => {
        value = value + 1
        return setValue(value)
    }
const res =()=>{
    return setValue(0)
}
    return (
        <div className={s.Count}>
            <input value={value} className={s.Input}/>
            <div>
                <div className={s.ButtonBorder}>
                    <button onClick={inc} className={s.Button1}>INC</button>
                    <button onClick={res} className={s.Button2}>RESET</button>
                </div>
            </div>
        </div>
    );
};