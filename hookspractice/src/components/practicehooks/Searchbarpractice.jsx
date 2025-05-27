import React, { useState } from "react";

const Searchbarpractice = () => {
  const data = ["Hari", "Vicky", "Kamalesh", "Sunil", "Rajesh", "Sakithi"];
  const [items, setItems] = useState("");

  const searchitems = data.filter((val) =>
    val.toLowerCase().includes(items.toLowerCase())
  );

  return (
    <>
      <div>Searchbarpractice</div>
      <input
        type="text"
        value={items}
        onChange={(e) => setItems(e.target.value)}
      />
      {searchitems.map((val, id) => (
        <li key={id}>{val} </li>
      ))}
    </>
  );
};

export default Searchbarpractice;
