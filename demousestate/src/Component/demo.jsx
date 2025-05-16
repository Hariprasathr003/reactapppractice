import { useEffect, useState } from "react";

export function Demo() {
  const [name, setName] = useState("");
  const [list, setList] = useState(() => {
    const datastore = localStorage.getItem("storedata");
    return datastore ? JSON.parse(datastore) : [];
  });
  const [istrue, setIsTrue] = useState(false);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("storedata", JSON.stringify(list));
  }, [list]);

  function handleAdd() {
    if (name.trim() !== "") {
      if (istrue) {
        const update = [...list];
        update[edit] = name;
        setList(update);
        setIsTrue(false);
        setEdit(null);
      } else {
        setList([...list, name]);
      }
      setName("");
    }
  }

  function handleEdit(currentIndex) {
    setName(list[currentIndex]);
    setIsTrue(true);
    setEdit(currentIndex);
  }

  function handledelete(currentIndex) {
    const deletedata = list.filter((_, id) => currentIndex !== id);
    setList(deletedata);
  }

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleAdd}>{istrue ? "Edit" : "Add"}</button>
      <ol>
        {list.map((val, index) => (
          <li key={index}>
            {val}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handledelete(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </>
  );
}
