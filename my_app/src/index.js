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
  const hour = new Date().getHours()+5
  const openHour = 12
  const closeHour = 22
  const isOpen = hour >= openHour && hour  <= closeHour
  console.log(isOpen)

  function Order({closeHour,openHour}){
    return(
    <>
      <p>We are open from {openHour}:00 to {closeHour}:00 today!</p>
    </>
    )
  }
  return (
    <>
      <footer className='App-footer'>pizzaRia-(since_2024)
        {isOpen?(<Order closeHour={closeHour} openHour={openHour}></Order>):(<p>We are happy to welcome you between our open hr{openHour}:00 and {closeHour}:00</p>)}
      </footer>
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)


