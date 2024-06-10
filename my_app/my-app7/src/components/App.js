import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Item from "./Item";

export default function App() {
  const [items, setItems] = useState([]);

  function addItems(Item) {
    setItems((items) => [...items, Item]);
  }

  function deleteItem(id) {
    setItems((items) => items.filter((Item) => Item.id !== id));
  }

  function toggleItem(id) {
    setItems((items) =>
      items.map((Item) =>
        Item.id === id ? { ...Item, packed: !Item.packed } : Item
      )
    );
  }

  function clearList() {
    const conformed = window.confirm("sure want do delete this....");
    if (conformed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={addItems} />
      <PackingList
        items={items}
        onDeleteItem={deleteItem}
        onToggleItem={toggleItem}
        onClearList={clearList}
      />
    </div>
  );
}
