import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement_counter, increment_counter } from "./slice/CounterSlice";

function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  //   function decrement() {
  //     setCount(count - 1);
  //   }

  //   function increment() {
  //     setCount(count + 1);
  //   }

  return (
    <div className="counter-container">
      <button
        className="counter-button"
        onClick={() => dispatch(decrement_counter())}
      >
        decrement
      </button>
      <label className="counter-label"> {count}</label>
      <button
        className="counter-button"
        onClick={() => dispatch(increment_counter())}
      >
        increment
      </button>
    </div>
  );
}

export default Counter;
