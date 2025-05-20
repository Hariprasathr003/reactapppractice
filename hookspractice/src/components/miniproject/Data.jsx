import { useEffect, useState } from "react";
function Data({ products, setproducts }) {
  const [product, setProduct] = useState(0);

  useEffect(() => {
    setProduct(products.length);
  }, [products]);

  function handleDelete(currectindex) {
    const deletestore = products.filter((val) => val.id !== currectindex);
    setproducts(deletestore);
  }
  function handledeleteAll() {
    setproducts([]);
  }
  if (products.length === 0) {
    return <h1 style={{ textAlign: "center" }}>Empty</h1>;
  }

  return (
    <>
      <div className="datasection">
        <h1>Total Card Product {product}</h1>
        {products.map((val) => (
          <h2 key={val.id}>
            {val.name} - {val.price}
            <button onClick={() => handleDelete(val.id)}>delete</button>
          </h2>
        ))}
        <button onClick={handledeleteAll}>DeletAll</button>
      </div>
    </>
  );
}

export default Data;
