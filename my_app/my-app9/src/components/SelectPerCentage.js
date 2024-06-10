import React from "react";

export default function SelectPerCentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Disattisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">Good(10%)</option>
        <option value="15">Amazing (15%)</option>
      </select>
    </div>
  );
}
