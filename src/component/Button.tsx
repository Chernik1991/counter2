import React from 'react';

type ButtonPropsType = {
    name: string,
    callback: () => void,
    className: string
    disable?: boolean,
}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <>
            <button
                disabled={props.disable}
                onClick={onClickHandler}
                className={props.className}
            >
                {props.name}
            </button>
        </>
    );
};