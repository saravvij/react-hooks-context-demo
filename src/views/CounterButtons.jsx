import React from 'react'
import  { useCounterContext } from '../context/CounterContext';


export default function CounterButtons() {
    const { increament, decreament } = useCounterContext();

    return (
        <div>
            <button onClick={increament}>++INCREASE</button>
            <button onClick={decreament}>--DECREASE</button>
        </div>
    );

}