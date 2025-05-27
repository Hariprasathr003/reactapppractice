import { useState } from "react";

const Todolistpractice = () => {
  const [text, setText] = useState("");
  const [depart, setDepart] = useState("");
  const [store, setStore] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    if (text && depart) {
      const update = { name: text, department: depart };
      setStore([...store, update]);
      setText("");
      setDepart("");
    }
  };

  const handleEditid = (index) => {
    const item = store[index];
    setText(item.name);
    setDepart(item.department);
    setStore(store.filter((_, i) => i !== index));
  };

  const handleDeleteid = (index) => {
    const filtered = store.filter((_, i) => i !== index);
    setStore(filtered);
  };

  return (
    <div>
      <h2>Todolist Practice</h2>
      <form onSubmit={handleForm}>
        <label>Name: </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <label>Department: </label>
        <input
          type="text"
          value={depart}
          onChange={(e) => setDepart(e.target.value)}
        />
        <br />
        <button type="submit">Add</button>
      </form>

      <ul>
        {store.map((val, index) => (
          <li key={index}>
            Name: {val.name} | Department: {val.department}
            <button onClick={() => handleEditid(index)}>Edit</button>
            <button onClick={() => handleDeleteid(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolistpractice;
