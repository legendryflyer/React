import React, { useState } from "react";
import BillInput from "./BillInput";
import SelectPerCentage from "./SelectPerCentage";
import Output from "./Output";
import Reset from "./Reset";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [persent1, setPersent1] = useState(0);
  const [persent2, setPersent2] = useState(0);
  const tip = bill * ((persent1 + persent2) / 2 / 100);

  function reset() {
    setBill("");
    setPersent1(0);
    setPersent2(0);
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPerCentage percentage={percent1} onselect={setPersent1}>
        How did you like my service?
      </SelectPerCentage>
      <SelectPerCentage percentage={percent2} onselect={setPersent2}>
        How did your friend like my service?
      </SelectPerCentage>
      <Output bill={bill} tip={tip} />
      <Reset onReset={reset} />
    </div>
  );
}
