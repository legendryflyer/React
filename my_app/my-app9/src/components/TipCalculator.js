import React from "react";
import BillInput from "./BillInput";
import SelectPerCentage from "./SelectPerCentage";
import Output from "./Output";
import Reset from "./Reset";

export default function TipCalculator() {
  return (
    <div>
      <BillInput />
      <SelectPerCentage>How did you like my service?</SelectPerCentage>
      <SelectPerCentage>How did your friend like my service?</SelectPerCentage>
      <Output />
      <Reset />
    </div>
  );
}
