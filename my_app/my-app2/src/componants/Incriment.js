import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);

   console.log(count) 
  };
  
  const decreaseCount = () => {
    setCount(count - 1);

    console.log(count);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>decrease</button>
    </div>
  );
}


