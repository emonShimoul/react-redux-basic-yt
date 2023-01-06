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