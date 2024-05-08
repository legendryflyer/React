import React, { useState } from "react";

export default function CounterF() {
  const [count, setCount] = useState(0);

  const incriment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const incrementFive = () => {
    incriment();
    incriment();
    incriment();
  };
  return (
    <div>
      <div>
        <div>Count:{count}</div>
        {/* <button onClick={this.increment}>increment</button> */}
        <button onClick={incrementFive}>increment</button>
      </div>
    </div>
  );
}
