import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count => count + 1);
  };

  const decrement = () => {
    setCount(count => count - 1);
  };

  return (
    <>
      <div className="t-text">{count}</div>
      <button className="t-btn-increment" onClick={increment}>Increment</button>
      <button className="t-btn-descrement" onClick={decrement}>Decrement</button>
    </>
  );
};
