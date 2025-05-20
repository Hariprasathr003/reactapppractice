import { useEffect, useRef, useState } from "react";

function Loginform() {
  const [list, setList] = useState("");
  const [passlist, setPassList] = useState("");

  const refvariable = useRef(null);

  useEffect(() => {
    console.log(list);
    console.log(passlist);
  });

  function handleSubmit(e) {
    e.preventDefault();
    const emailAddress = refvariable.current.value;
    console.log({ email: emailAddress, password: passlist });
    setList("");
    setPassList("");
    refvariable.current.value = "";
  }
  return (
    <>
      <h1>UseRef Examples</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Email</label>
        <input
          type="email"
          //uncontrolled input
          ref={refvariable}
          //   value={list}
          //   onChange={(e) => setList(e.target.value)}
        />
        <label>Password</label>
        <input
          type="text"
          //controlled input
          value={passlist}
          onChange={(e) => setPassList(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Loginform;
