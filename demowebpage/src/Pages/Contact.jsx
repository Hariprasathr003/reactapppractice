import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../cssstyle/contact/Contactsection.css";
import FormDeatils from "../component/contact/FormDeatils";

export default function Contact() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mail, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState(0);
  const [storage, setStorage] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (name && mail && address && number) {
      const updateFormData = {
        id: Date.now(),
        name: name,
        mail: mail,
        address: address,
        phone: number,
      };
      console.log(updateFormData, "data");

      setStorage([...storage, updateFormData]);
      setName("");
      setEmail("");
      setAddress("");
      setNumber("");
    }
  }

  return (
    <>
      <h1>Contact</h1>
      <form className="contactsection" onSubmit={handleSubmit}>
        <h2>Contact Info</h2>

        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          value={mail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Address</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label>Phone Number</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
      <hr />
      <FormDeatils storedata={storage} setStoredata={setStorage} />
    </>
  );
}
