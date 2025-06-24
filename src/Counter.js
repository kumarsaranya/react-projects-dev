import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }
  return (
    <div className="counter-container">
      <button className="counter-button" onClick={decrement}>
        decrement
      </button>
      <label className="counter-label"> {count}</label>
      <button className="counter-button" onClick={increment}>
        increment
      </button>
    </div>
  );
}

export default Counter;
