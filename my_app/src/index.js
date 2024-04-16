import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}


function Menu() {
  return (
    <>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </>
  );
}

function Pizza() {
  return (
    <>
      <div>
        <img src="images\focaccia.jpg" alt="focaccia" />
        <h2>Focaccia with mozzarella and basil.</h2>
        <p>15 €</p>
      </div>
    </>
  );
}

function Header() {
  return (
    <>
      <header className="App-header">Welcome to pizzaRia</header>
    </>
  );
}

function Footer() {
  return (
    <>
      <footer className='App-footer'>pizzaRia-(since_2024)</footer>
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)


