import React, { useState } from "react";

export default function ItemListApp() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue.trim()]);
      setInputValue("");
    }
  };
  return (
    <div class="dynamic-list-manager-container">
        <h2 class="dynamic-list-manager-heading">Dynamic List Manager</h2>
        <div class ="styles.inputContainer">
          <input class="dynamic-list-manager-input" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter an item"/>
            <button class="dynamic-list-manager-add-button" onClick={handleAddItem}>
            Add Item
            </button>
        </div>
        <div class="dynamic-list-manager-list-container">
          {items.length === 0 ? (
            <p>No items added yet.</p>
          ) : (
            <ul class="dynamic-list-manager-list">
              {items.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
    </div>
  );
}

