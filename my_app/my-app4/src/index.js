import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import ClassComponant from "./componants/ClassComponant";
// import ClassOne from "./componants/ClassOne";
// import ClassOneS from "./componants/ClassOneS";
// import CounterC from "./componants/CounterC";
// import CounterF from "./componants/CounterF";
// import CounterObj from "./componants/CounterObj";
import CounterObjClass from "./componants/CounterObjClass";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App />
    <ClassComponant />
    <ClassOne />
    <ClassOneS />
    <CounterC />
    <CounterF /> */}
    {/* <CounterObj /> */}
    <CounterObjClass />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
