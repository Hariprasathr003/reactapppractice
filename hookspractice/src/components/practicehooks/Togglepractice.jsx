import React, { useState } from "react";

export const Togglepractice = () => {
  const [istoggle, setIsToggle] = useState(false);
  function handleClickView() {
    setIsToggle(true);
  }
  function handleClickHide() {
    setIsToggle(false);
  }
  return (
    <>
      <div>Togglepractice {istoggle && <span>hello world</span>}</div>
      <button onClick={handleClickView}>View</button>
      <button onClick={handleClickHide}>Hide</button>
    </>
  );
};
