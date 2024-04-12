import React from 'react';
import ReactDOM from 'react-dom/client';


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
  return (<h4>manu</h4>)
}

function Footer() {
  return (<h3>Footer</h3>)
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
// root.render(App())