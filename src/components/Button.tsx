import React from 'react';

interface IProps {
    button:number;
    plus: (id: string, buttonValue: number)=>void;
    id:string;
}

const Button = (props:IProps) => {
    return (
        <button onClick={()=>props.plus(props.id, props.button)}>
            {props.button}
        </button>
    );
};

export default Button;
