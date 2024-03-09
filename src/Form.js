import { useState } from "react";

export default function Form({ onAddItem }) {
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