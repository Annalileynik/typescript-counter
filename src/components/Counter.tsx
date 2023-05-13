import React from 'react';
import Button from "./Button";


interface ICounter {
    id:string;
    value:number;
    buttons: number[]
}
interface IProps {
    counter:ICounter;
    plus: (id: string, buttonValue: number)=> void;
}
const Counter = (props:IProps) => {
    return (
        <div style={{marginTop:10}}>
           <b> {props.counter.value} </b>

            {props.counter.buttons.map((button, index) =>
            <Button key={index} button={button} id={props.counter.id}
                    plus={props.plus}
            />
            )}

        </div>
    );
};

export default Counter;
