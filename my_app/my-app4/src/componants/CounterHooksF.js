import React, { useState } from "react";

export default function CounterHooksF() {
  const [items, setItems] = useState([]);
  const addItem = (e) => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 100) + 1,
      },
    ]);
  };

  return (
    <div>
      <button onClick={addItem}> add element to list </button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}
