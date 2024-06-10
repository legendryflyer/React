import React from "react";

export default function SelectPerCentage({ children }) {
  return (
    <div>
      <label>{children}</label>
      <select>
        <option value="0">Disattisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">Good(10%)</option>
        <option value="15">Amazing (15%)</option>
      </select>
    </div>
  );
}
