import { useState } from "react";
import { useRef } from "react";

export function UseResfDemo() {
  const name = useRef();
  const [list, setList] = useState(null);
  console.log(name, "useReffffffffff");

  function handleClick() {
    setList(name.current.value);
  }

  return (
    <>
      <h1>welcome to {list ?? "no name"}</h1>
      <input type="text" ref={name} />
      <button onClick={handleClick}>set Name</button>
      {/* <button onClick={() => name.current.focus()}>focus Name</button>
      <button onClick={() => name.current.blur()}>blur Name</button> */}
    </>
  );
}
