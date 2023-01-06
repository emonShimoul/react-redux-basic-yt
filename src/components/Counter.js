import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {

    const count = useSelector(state => state.count);
    console.log(count);
    const handleIncrement = () => {

    };

    return (
        <div>
            <h2>Counter App</h2>

            <h3>Count: 0</h3>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default Counter;


// 1. state - count: 0
// 2. action - increment, decrement, reset
// 3. reducers - increment -> count => count + 1
//             - increment -> count => count - 1
//             - reset -> count => 0
// 4. store
// 5. providing store in react
// 4. use store