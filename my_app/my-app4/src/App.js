import "./App.css";
import React, { useState } from "react";

function App() {
  // [
  //   {id:1,newitem:"css",newItemDescription:"description"},
  //   {id:2,newitem:"css2",newItemDescription:"description2"}
  //   {id:3,newitem:"css2",newItemDescription:"description3"}
  // ]
  //newitem:string
  //newItemDescription:string

  let [items, setItems] = useState([]);
  let [newItemName, setNewItem] = useState("");
  let [newDescription, SetNewDescription] = useState("");

  // logics
  const addItem = () => {
    if (newItemName.trim() === "" || newDescription.trim() === "") {
      alert("values cannot be blank");
      return;
    }

    const newItem = {
      id: Math.floor(Math.random() * 1000 + 1),
      newItemName: newItemName,
      newDescription: newDescription,
    };
    items = [...items, newItem];
    setItems(items);
    setNewItem("");
    SetNewDescription("");
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };
  return (
    <div className="App">
      <h1>Item List</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          id="name"
          value={newItemName}
          onChange={(event) => setNewItem(event.target.value)}
        />
      </div>

      <div>
        <label>Description:</label>
        <input
          type="text"
          id="description"
          value={newDescription}
          onChange={(event) => SetNewDescription(event.target.value)}
        />
      </div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.newItemName}</strong> - {item.newDescription}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
