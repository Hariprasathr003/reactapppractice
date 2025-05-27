import { useState } from "react";
import "../demoproject/demostyle.css";
import Datastore from "./Datastore";
export default function CardSet() {
  const [list, setList] = useState("");
  const [age, setAge] = useState(0);
  const [mobileNumber, setMobileNumber] = useState(0);
  const [mail, setMail] = useState("");
  const [store, setStore] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (list && age && mobileNumber && mail) {
      const update = {
        id: Date.now(),
        name: list,
        age: parseInt(age),
        mobileNumber: mobileNumber,
        mail: mail,
      };
      setStore([...store, update]);
      setList("");
      setAge("");
      setMobileNumber("");
      setMail("");
    }
  }
  console.log(store, "storeeeedataaaaaaaa");

  return (
    <>
      <div className="DemoCardSection">
        <h1>Employee Details</h1>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            value={list}
            onChange={(e) => setList(e.target.value)}
          />
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <label>Mobile Number</label>
          <input
            type="number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Datastore storedata={store} setStoredata={setStore} />
    </>
  );
}
