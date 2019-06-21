import { useState } from 'react';
import createUseContext from 'constate';

function useCounter() {
    const[count, setCount] = useState(0);
    const increament = () => setCount(count+1);
    const decreament = () => setCount(count-1);
    return { count, increament, decreament };
}

export const useCounterContext = createUseContext(useCounter);