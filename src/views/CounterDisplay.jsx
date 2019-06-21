import React from 'react';
import { useCounterContext }from '../context/CounterContext';

export default function CounterDisplay() {
    const { count } = useCounterContext();

    return (
    <div>
        <h4>Count</h4>
        <h4>{count}</h4>
    </div>
    );

}