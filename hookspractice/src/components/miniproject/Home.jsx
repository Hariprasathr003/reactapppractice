import { useState } from "react";
import Data from "./Data";
export default function Home() {
  const [list, setList] = useState("");
  const [numberlist, setNumberList] = useState(0);
  const [storeItem, setStoreItem] = useState([]);

  const handleSubmitData = (e) => {
    e.preventDefault();

    if (list && numberlist) {
      const store = {
        id: Date.now(),
        name: list,
        price: parseInt(numberlist),
      };
      //   console.log(store, "dataaaaa");

      setStoreItem([...storeItem, store]);
      setList("");
      setNumberList("");
    }
  };
  return (
    <>
      <div className="miniProjectSection">
        <h1>Add Products</h1>
        <form onSubmit={handleSubmitData}>
          <label>Product Name </label>
          <input
            type="text"
            value={list}
            onChange={(e) => setList(e.target.value)}
          />
          <label>Price </label>
          <input
            type="number"
            value={numberlist}
            onChange={(e) => setNumberList(e.target.value)}
          />
          <button type="submit">Add Product</button>
        </form>
      </div>
      <Data products={storeItem} setproducts={setStoreItem} />
    </>
  );
}
