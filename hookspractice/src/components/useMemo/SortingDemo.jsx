import { useMemo, useState } from "react";

function SortingDemo() {
  const [order, setOrder] = useState("asc");
  const [isArray, setIsArray] = useState([1, 3, 4, 5, 6, 2, 9, 7]);

  //   const sortArray = isArray.sort((a, b) => {
  //     console.log("sorted Array");
  //     return order === "asc" ? a - b : b - a;
  //   });

  const sortArray = useMemo(() => {
    return isArray.slice().sort((a, b) => {
      return order === "asc" ? a - b : b - a;
    });
  }, [isArray, order]);
  return (
    <>
      <h1>Sorting Array</h1>
      {sortArray.map((val, ind) => (
        <li key={ind}>{val}</li>
      ))}
      <button onClick={() => setOrder(order === "asc" ? "desc" : "asc")}>
        Click
      </button>
    </>
  );
}

export default SortingDemo;
