import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }
  return (
    <>
      <div className="countersection">
        <h1>Count : {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>

    //using prevState props
    // <>
    //   <h1>Count : {count}</h1>
    //   <button
    //     onClick={() =>
    //       setCount((prevState) => {
    //         return prevState + 1;
    //       })
    //     }
    //   >
    //     Increment
    //   </button>
    //   <button
    //     onClick={() =>
    //       setCount((prevState) => {
    //         return prevState - 1;
    //       })
    //     }
    //   >
    //     Decrement
    //   </button>
    //   <button onClick={() => setCount(0)}>Reset</button>
    // </>

    //aerrow function way
    // <>
    //   <h1>Count : {count}</h1>
    //   <button onClick={() => setCount(count + 1)}>Increment</button>
    //   <button onClick={() => setCount(count - 1)}>Decrement</button>
    //   <button onClick={() => setCount(0)}>Reset</button>
    // </>
  );
}
