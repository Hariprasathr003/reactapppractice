import React, { useEffect, useRef, useState } from "react";

const Maxcount = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(10);
  const intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (time === 0) {
      clearInterval(intervalRef.current);
    }
  }, [time]);

  return (
    <div>
      <h1>Maxcount : {count}</h1>
      <h2> Left Time: {time}</h2>
      {time > 0 && (
        <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
      )}
    </div>
  );
};

export default Maxcount;
