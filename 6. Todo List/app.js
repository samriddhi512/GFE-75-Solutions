import { useState } from "react";
export default function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  function addItem() {
    const val = value.trim();
    if (!val) return;
    setList((prev) => [...prev, val]);
    setValue("");
  }

  function deleteItem(itemId) {
    setList((prev) => prev.filter((_, idx) => idx != itemId));
  }
  return (
    <div className="container">
      <h1 className="header">Todo List</h1>
      <div className="input-container">
        <input
          className="input"
          type="text"
          placeholder="Add your task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="add-button" onClick={addItem}>
          Submit
        </button>
      </div>
      <ul className="list">
        {list.map((item, idx) => {
          return (
            <li className="listItem">
              <span className="item-text">{item}</span>
              <button className="delete-button" onClick={() => deleteItem(idx)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
