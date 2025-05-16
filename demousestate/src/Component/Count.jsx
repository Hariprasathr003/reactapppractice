import { useState } from "react";

export function Count() {
  const [count, setCount] = useState(0);

  function handlecount() {
    setCount(count + 1);
  }
  return (
    <>
      {/* <button onClick={() => setCount((count) => count + 1)}></button> */}
      <button onClick={handlecount}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <h1>Count : {count}</h1>
    </>
  );
}
