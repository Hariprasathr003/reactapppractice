import { useState } from "react";
import { store } from "./data.js";

export default function Card() {
  const [list, setList] = useState(store);

  function handleDelete(currectindex) {
    const deleteList = list.filter((val) => val.id !== currectindex);
    setList(deleteList);
  }
  function handleDeleteAll() {
    setList([]);
  }
  function reset() {
    setList(store);
  }
  return (
    <>
      <div className="cardsection">
        <h1>Total Card Products: {list.length}</h1>
        <div>
          {list.map((val) => (
            <h2 key={val.id}>
              {val.name} - {val.price}
              <button onClick={() => handleDelete(val.id)}>delete</button>
            </h2>
          ))}
        </div>
        <button className="deleteallbutton" onClick={handleDeleteAll}>DeleteAll</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </>
  );
}
