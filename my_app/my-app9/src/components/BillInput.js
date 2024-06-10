import React from "react";
// import TipCalculator from "./TipCalculator";

export default function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much is bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
