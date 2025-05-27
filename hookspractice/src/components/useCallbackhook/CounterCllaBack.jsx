import { useCallback, useEffect, useState } from "react";

function CounterCallback() {
  const [count, setCount] = useState(0);
  const [textlist, setTextList] = useState("");
  // function handleChange() {
  //   setCount(count + 1);
  // }
  const handleChange = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  useEffect(() => {
    console.log("Counter start");
  }, [handleChange]);
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={handleChange}>Click</button>
      <hr />
      <input
        type="text"
        value={textlist}
        onChange={(e) => setTextList(e.target.value)}
      />
      <p>Text :{textlist}</p>
    </>
  );
}

export default CounterCallback;
