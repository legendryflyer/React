import "./App.css";
import React, { useState } from "react";

function App() {
  const steps = [
    "learn react",
    "build something awesome",
    "make it open source",
  ];

  const [step, setStep] = useState(1);
  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div className={`${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`${step >= 1 ? "active" : ""}`}>2</div>
          <div className={`${step >= 1 ? "active" : ""}`}>3</div>
        </div>
        <p className="message">
          Step {step}: {steps[step - 1]}
        </p>
        <div className="buttons">
          <button onClick={handlePrevious} style={{ background: "#2c2d2e", color: "#fff" }}>Previous</button>
          <button onClick={handleNext} style={{ background: "#2c2d2e", color: "#fff" }}>Next</button>
        </div>
      </div>
    </>
  );
}

export default App;
