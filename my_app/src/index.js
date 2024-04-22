import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "images/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "images/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "images/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "images/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "images/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "images/prosciutto.jpg",
    soldOut: false,
  },
];

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
  const pizzas = pizzaData
  const numPizza = pizzas.length
  return (
    <>
      <div className='menu'>
        <ul>
          {pizzas.map((pizza)=>(<Pizza pizzaObj = {pizza}/>))}
        </ul>
      </div> 
    </>
  );
}

function Pizza(props) {
  return (
    <>
      {/* <div>
        <img src="images\focaccia.jpg" alt="focaccia" />
        <h2>Focaccia with mozzarella and basil.</h2>
        <p>15 €</p>
      </div> */}
      <li>
            <h1>{props.pizzaObj.name}</h1>
            <p>{props.pizzaObj.ingredients}</p>
            <p>{props.pizzaObj.price}</p>
            <p>{props.pizzaObj.soldOut}</p>
            <img src={props.pizzaObj.photoName}></img>   
      </li>
    </>
  );
}

function Header() {
  return (
    <>
      <header className="header">
        <h1>Welcome to pizzaRia</h1>
      </header>
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
      <footer className='footer'>pizzaRia-(since_2024)
        {isOpen?(<Order closeHour={closeHour} openHour={openHour}></Order>):(<p>We are happy to welcome you between our open hr{openHour}:00 and {closeHour}:00</p>)}
      </footer>
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)


