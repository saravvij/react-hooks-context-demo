import React from 'react';
import CounterDisplay from './CounterDisplay';
import CounterButtons from './CounterButtons';
import { useCounterContext } from '../context/CounterContext';

export default function Counter() {
    return(
    <useCounterContext.Provider>
        <CounterDisplay></CounterDisplay>
        <CounterButtons></CounterButtons>
    </useCounterContext.Provider>
    );

}