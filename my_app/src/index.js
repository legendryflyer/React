import React from 'react';
import ReactDOM from 'react-dom/client';

let data = [{
  name: "pizza spinach",
  price: 120,
  size: "medium"
},
{
  name: "pizza margherita",
  price: 85,
  size: "small"
},
{
  name: "calzone",
  price: 65,
  size: "large"
}]


function App() {
  return (
    <>
      <h1>learning react</h1>
      <About />
      <Header />
      <Menu />
      <Footer />
    </>)
}


function About() {
  return (<h2>About</h2>)
}

function Header() {
  return (<h3>Header</h3>)
}

function Menu() {
  return (
    <>
      <h4>manu</h4>
      <Pizza/>
    </>
  )
}

function Pizza() {
  let style = { color: 'red', backgroundColor: 'yellow' }
  return (
    <div>
      <p style={style}>I love pizza! </p>
      <p style={style}>{data[0].price}</p>
      <p style={style}>{data[0].size}</p>
    </div>
  )
}

function Footer() {
  return (<h3>Footer</h3>)
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
// root.render(App())