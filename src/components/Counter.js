import React, { useState } from 'react';

const Counter = () => {

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


// state - count: 0
// action - increment, decrement, reset
// reducers - increment -> count => count + 1
//          - increment -> count => count - 1
//          - reset -> count => 0