import React, { useState } from "react";

const TodoList = () => {
  const [text, setText] = useState("");
  const [store, setStore] = useState([]);
  const [edit, setEdit] = useState(null);

  function handleAddList() {
    if (text.trim() !== "") {
      if (edit !== null) {
        const update = [...store];
        update[edit] = text;
        setStore(update);
        setEdit(null);
      } else {
        setStore([...store, text]);
      }
      setText("");
    }
  }

  function handleEdit(curr) {
    setText(store[curr]);
    setEdit(curr);
  }

  function handleDel(curr) {
    const remove = store.filter((_, id) => id !== curr);
    setStore(remove);
  }

  return (
    <div>
      <h1>TodoList</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddList}>AddList</button>
      {store.map((val, ind) => (
        <li key={ind}>
          {val}
          <button onClick={() => handleEdit(ind)}>Edit</button>
          <button onClick={() => handleDel(ind)}>Del</button>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
