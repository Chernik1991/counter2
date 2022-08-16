import React, {ChangeEventHandler} from 'react';

type InputPropsType = {
    value:string,
    className:string
    onChange?:ChangeEventHandler<HTMLInputElement>
    type?:string
}

export const Input = (props:InputPropsType) => {

    return (
        <>
            <input
                type={props.type}
                onChange={props.onChange}
                value={props.value}
                className={props.className}/>
        </>
    );
};
