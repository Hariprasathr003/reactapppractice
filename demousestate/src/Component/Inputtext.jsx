import { useState } from "react";

export function Inputtext() {
  const [name, setName] = useState("");
  const [clearName, setClearName] = useState("");

  function handleChange(e) {
    const res = e.target.value;
    setName(res);

    if (res.length > 0 && res.length < 10) {
      setClearName("Name must be at least 10 characters long.");
    } else {
      setClearName("");
    }
  }
  function handleClear() {
    setName("");
    setClearName("");
  }
  return (
    <>
      {/* <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /> */}
      <h1>Text content</h1>
      <input type="text" value={name} onChange={handleChange} />
      <p>{clearName}</p>
      <button onClick={handleClear}>Clear</button>
      {/* <button onClick={() => setClearName("")}>Clear</button> */}
      <h1>Display Name :{name}</h1>
    </>
  );
}
