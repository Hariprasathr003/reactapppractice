import { useEffect, useState } from "react";

export function DemoTodoList() {
  const [name, setName] = useState("");

  const [list, setlist] = useState(() => {
    const datastore = localStorage.getItem("storedata");
    return datastore ? JSON.parse(datastore) : [];
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("storedata", JSON.stringify(list));
  }, [list]);

  function addlist() {
    if (name.trim() !== "") {
      if (isEditing) {
        const updatedList = [...list];
        updatedList[editIndex] = name;
        console.log("Added:", name);
        setlist(updatedList);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        setlist([...list, name]);
      }
      setName("");
    }
  }

  function handleDelete(currentIndex) {
    const updatedList = list.filter((_, index) => index !== currentIndex);
    setlist(updatedList);
    if (isEditing && editIndex === currentIndex) {
      setIsEditing(false);
      setEditIndex(null);
      setName("");
    }
  }

  function handleEdit(currentIndex) {
    setName(list[currentIndex]);
    setIsEditing(true);
    setEditIndex(currentIndex);
  }

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={addlist}> {isEditing ? "Update" : "Add"} </button>

      {list.map((val, index) => (
        <div key={index}>
          {val}
          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </>
  );
}
