import { useState } from "react";

export default function Dropdown() {
  const [value1, setValue] = useState("");
  const [btnButton, setBtn] = useState(1);

  return (
    <>
      <button onClick={() => setBtn(btnButton + 1)}>{btnButton}</button>
      <input type="text" value={btnButton} />

      <select
        name=""
        id=""
        value={btnButton}
        onChange={(e) => {
          console.log("hi");
          setValue(e.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <p>hi : {btnButton}</p>
    </>
  );
}
