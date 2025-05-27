import { useState } from "react";

export const Counterpractice = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Counter :{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
};
