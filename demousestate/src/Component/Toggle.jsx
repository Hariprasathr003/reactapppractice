import { useState } from "react";
export function Toggle() {
  const [isVisible, setIsVisible] = useState(true);
  function handlehide() {
    setIsVisible(false);
  }
  function handleshow() {
    setIsVisible(true);
  }
  return (
    <div>
      {/* <button onClick={() => setIsVisible(!isVisible)}>Toggle</button> */}
      <button onClick={handleshow}>Toggle click Show</button>
      <button onClick={handlehide}>Toggle click Hide</button>
      <p>{isVisible && <span>Hi I am Visible</span>}</p>
      {/* {isVisible && <p>This text is visible</p>} */}
    </div>
  );
}
