import axios from "axios";
import { useEffect, useState } from "react";

const Table = () => {
  const [store, setStore] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [editIt, setEditIt] = useState("");

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const data = await axios("https://jsonplaceholder.typicode.com/users");

        const response = data.data;

        setStore(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFunction();
  }, []);
  console.log(store, "storeData");

  function handleForm(e) {
    e.preventDefault();
    const updatedata = {
      id: editIt !== null ? store[editIt].id : Date.now(),
      name: name,
      email: email,
      address: { city: address },
      phone: phone,
      website: website,
    };

    if (editIt !== null) {
      const update = [...store];
      update[editIt] = updatedata;
      setStore(update);
      setEditIt(null);
    } else {
      setStore([...store, updatedata]);
    }
    setName("");
    setEmail("");
    setAddress("");
    setPhone("");
    setWebsite("");
  }

  function handledit(id) {
    const updatedata = store.findIndex((val) => val.id === id);
    if (updatedata === -1) return "no data";

    const find = store[updatedata];
    setName(find.name);
    setEmail(find.email);
    setAddress(find.address.city);
    setPhone(find.phone);
    setWebsite(find.website);
    setEditIt(updatedata);
  }

  function handledelete(id) {
    const delData = store.filter((val) => val.id !== id);
    setStore(delData);
  }
  let a = "abs";
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>address</th>
            <th>phone</th>
            <th>website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {store.map((val) => (
            <tr key={val.id}>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>{val.address.city}</td>
              <td>{val.phone}</td>
              <td>
                <a href={`${val.website}/${a}`}>{val.website}</a>
              </td>
              <td>
                <button onClick={() => handledit(val.id)}>Edit</button>
                <button onClick={() => handledelete(val.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Add</h1>
      <form onSubmit={(e) => handleForm(e)}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          required
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
        />
        <label>Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="address"
          required
        />
        <label>Website</label>
        <input
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="website"
          required
        />
        <label>Phone</label>
        <input
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Numbre"
          required
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Table;
