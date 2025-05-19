import { useEffect, useState } from "react";

export function Demo() {
  const [name, setName] = useState("");

  // Data management
  const [list, setList] = useState(() => {
    const datastore = localStorage.getItem("storedata");
    return datastore ? JSON.parse(datastore) : [];
  });

  console.log(list, "Data Stor");
  const [istrue, setIsTrue] = useState(false);
  const [edit, setEdit] = useState(null);

  const [isActive, setIsActive] = useState(null);

  useEffect(() => {
    localStorage.setItem("storedata", JSON.stringify(list));

    return () => localStorage.removeItem("storedata");
  }, []);

  function handleAdd() {
    if (name.trim() !== "") {
      if (istrue) {
        const update = [...list];
        // update[edit] = name;
        update[edit] = { ...update[edit], description: name };

        setList(update);
        setIsTrue(false);
        setEdit(null);
      } else {
        setList([...list, { description: name, isActive: false }]);
      }
      setName("");
    }
  }

  function handleEdit(currentIndex) {
    setName(list[currentIndex].description);
    setIsTrue(true);
    setIsActive(currentIndex);
    setEdit(currentIndex);
  }

  function handledelete(currentIndex) {
    const deletedata = list.filter((_, id) => currentIndex !== id);
    setList(deletedata);
  }

  function handleIsActive(currentIndex) {
    console.log(currentIndex, "Index");

    setList(
      list.map((val, index) => {
        if (index === currentIndex) {
          val.isActive = !val.isActive;
        }
        return val;
      })
    );
  }

  console.log(list, "LDSSSSLLLLLLLL");

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
            <span style={{ color: val.isActive ? "red" : "green" }}>
              {val.description}
            </span>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handledelete(index)}>Delete</button>
            <button onClick={() => handleIsActive(index)}>
              {val.isActive ? "not active" : "active"}
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}
