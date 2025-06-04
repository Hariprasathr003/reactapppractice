import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  function handleStart() {
    setIsRunning(true);
  }
  function handleEnd() {
    setIsRunning(false);
  }
  function handlereset() {
    setTime(0);
    setIsRunning(false);
  }

  function timedata(time) {
    const minitus = Math.floor((time / 6000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const miliseconds = Math.floor((time / 10) % 100);

    return `${minitus}-${seconds}-${miliseconds}`;
  }

  return (
    <div>
      <h1>Stopwatch</h1>
      <h1>{timedata(time)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleEnd}>End</button>
      <button onClick={handlereset}>Restart</button>
    </div>
  );
};
export default Stopwatch;
