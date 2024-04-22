import React, { useState } from 'react';

const useCounter = (initialValue, stock) => {
    const [count, setCount] = useState(initialValue);

    const increase = () => {
        setCount(prevCount => (prevCount < stock ? prevCount + 1 : prevCount));
    };

    const decrease = () => {
        setCount(prevCount => (prevCount > initialValue ? prevCount - 1 : prevCount));
    };

    return {
        count,
        increase,
        decrease
    };
};

export default useCounter;
