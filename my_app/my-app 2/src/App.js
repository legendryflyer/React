import logo from "./logo.svg";
import "./App.css";
import React from "react";

function ButtonOnClick() {
  return (
    <div>
      <button onClick={() => console.log("You clicked me!")}>Click Me</button>
    </div>
  );
}






function App() {
  return (
    <>
      <ButtonOnClick /> 
    </>
  );
}

export default App;
