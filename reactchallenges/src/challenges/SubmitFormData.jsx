import React, { useState } from "react";

const SubmitFormData = () => {
  const initialData = { name: "", email: "", address: "", phone: "" };
  const [list, setList] = useState(initialData);
  const [store, setStore] = useState([]);
  const [edit, setedit] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setList({ ...list, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (edit !== null) {
      const update = store.map((val) => {
        return val.id === edit ? { ...list, id: edit } : val;
      });

      setStore(update);
      setedit(null);
    } else {
      const updatedata = {
        id: Date.now(),
        name: list.name,
        email: list.email,
        address: list.address,
        phone: list.phone,
      };
      setStore([...store, updatedata]);
    }
    setList(initialData);
  }

  function handleEdit(curr) {
    setList({
      name: curr.name,
      email: curr.email,
      address: curr.address,
      phone: curr.phone,
    });
    setedit(curr.id);
  }

  function handleDelete(id) {
    const remove = store.filter((val) => val.id !== id);
    setStore(remove);
  }

  return (
    <div>
      <h1>SubmitFormData</h1>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          id=""
          value={list.name}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          id=""
          value={list.email}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="">Address</label>
        <input
          type="text"
          name="address"
          id=""
          value={list.address}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="">Phone</label>
        <input
          type="number"
          name="phone"
          id=""
          value={list.phone}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit"> Submit</button>
      </form>

      {store.map((val) => {
        return (
          <ul key={val.id}>
            <h1>PersonData</h1>
            <li>{val.name}</li>
            <li>{val.email}</li>
            <li>{val.address}</li>
            <li>{val.phone}</li>
            <li>
              <button onClick={() => handleDelete(val.id)}>Del</button>
              <button onClick={() => handleEdit(val)}>Edit</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default SubmitFormData;
