import { useReducer } from "react";

function CountReduce() {
  const initialValue = { count: 0 };
  const Reducer = (state, action) => {
    switch (action.type) {
      case "increment": {
        return { count: state.count + 1 };
      }
      case "decrement": {
        return { count: state.count - 1 };
      }
      case "reset": {
        return { count: 0 };
      }
      default: {
        return null;
      }
    }
  };
  const [state, dispatch] = useReducer(Reducer, initialValue);
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
}

export default CountReduce;
