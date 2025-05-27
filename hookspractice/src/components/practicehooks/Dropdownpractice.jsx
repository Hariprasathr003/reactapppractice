import  { useState } from "react";

const Dropdownpractice = ({ items }) => {
  const [dropbtn, setDropBtn] = useState(false);
  return (
    <>
      <div>Dropdownpractice</div>
      <button onClick={() => setDropBtn(!dropbtn)}>DropBtn</button>
      {dropbtn && items.map((val, id) => <li key={id}>{val}</li>)}
    </>
  );
};

export default Dropdownpractice;
