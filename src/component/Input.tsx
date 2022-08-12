import React from 'react';

type InputPropsType = {
    type?:string
    value:number
    className:string
}

export const Input = (props:InputPropsType) => {
    return (
        <>
            <input type={props.type} step="1" value={props.value} min="1" max="100" className={props.className}/>
        </>
    );
};
