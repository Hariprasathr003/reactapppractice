import { useContext } from "react";
import { createContext, useState } from "react";
export const CreateContext = createContext("");

export default function GlobalContext() {
  const [data, setData] = useState("Hi Hello");
  return (
    <>
      <CreateContext.Provider value={data}>
        <p>Parent Data</p>
        <h1>{data}</h1>
        <ChildContext />
      </CreateContext.Provider>
    </>
  );
}

export function ChildContext({ user }) {
  return (
    <>
      <p>Child1 data</p>
      <h2>{user}</h2>
      <ChildContext1 />
    </>
  );
}

export function ChildContext1() {
  return (
    <>
      <p>Child2 data</p>
      <h2></h2>
      <ChildContext2 />
    </>
  );
}

export function ChildContext2() {
  const UseingContext = useContext(CreateContext);
  return (
    <>
      <p>Child3 data</p>
      <h2>{UseingContext}</h2>
    </>
  );
}
