import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div>
        <div>
          <div>{title}</div>
          <button onClick={() => setIsActive(!isActive)}>
            {isActive ? "-" : "+"}
          </button>
        </div>
        {isActive && <div>{content}</div>}
      </div>
    </>
  );
};

export default Accordion;
