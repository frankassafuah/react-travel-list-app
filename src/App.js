import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(item) {
    setItems((items) => items.filter((i) => i.id != item.id));
  }
  function handleToggleItem(item) {
    setItems((items) =>
      items.map((i) =>
        i.id == item.id ? { ...item, packed: !item.packed } : item
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

function Logo() {
  return <h1>🏝️Far Away🧳</h1>;
}

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItem(newItem);
    setQuantity(1);
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your 😍 trip</h3>
      <select
        required
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        required
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
            item={item}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  const numItems = items.length; //derived state
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round([(+numPacked / +numItems) * 100]);

  return (
    <footer className="stats">
      <em>
        {percentage == 100
          ? "You got everything! Ready to go ✈️"
          : ` 🧳 You have ${numItems} item(s) on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
