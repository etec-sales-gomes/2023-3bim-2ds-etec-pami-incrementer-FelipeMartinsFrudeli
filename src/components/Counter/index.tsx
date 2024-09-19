import React from 'react';
import Button from "../Button";
import './Counter.css';

function Counter() {

    const [counter, setCounter] = React.useState(0);

    const increment = () => setCounter(prev => prev + 1);
    const decrement = () => setCounter(prev => prev - 1);

    return (
        <div className="counter">
            <Button onClick={increment}>+ Increment</Button>
            <h2 className="counter-label">{counter}</h2>
            <Button onClick={decrement}>- Decrement</Button>
        </div>
    )
}

export default Counter;