import { useState } from "react";
import Form from './Form.js'
import PackingList from './PackingList.js'
import Logo from './Logo.js'
import Stats from "./Stats.js";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(item) {
    setItems((items) => items.filter((i) => i.id !== item.id));
  }
  function handleToggleItem(item) {
    setItems((items) =>
      items.map((i) =>
        i.id === item.id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
        items={items}
      />
      <Stats items={items} />
    </div>
  );
}






