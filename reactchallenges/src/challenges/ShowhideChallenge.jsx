import React, { useState } from "react";

const ShowhideChallenge = () => {
  const [isToggle, setIsToggle] = useState(false);
  function handleShow() {
    setIsToggle(true);
  }
  function handleHide() {
    setIsToggle(false);
  }
  return (
    <div>
      <h1>ShowhideChallenge</h1>
      <div>
        <h1>Hi Your Name {isToggle && <span>Vasanth</span>}</h1>
        <button onClick={handleShow}>Show</button>
        <button onClick={handleHide}>Hide</button>
      </div>
    </div>
  );
};

export default ShowhideChallenge;
