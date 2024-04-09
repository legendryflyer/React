import React from 'react';
import ReactDOM from 'react-dom/client';


function App(){
  return (<h1>Learning React</h1>)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
// root.render(App())