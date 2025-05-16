import { useState } from "react";

export function Objectstate() {
  const initialFormState = { name: "", email: "", phone: "", age: "" };

  const [form, setForm] = useState(initialFormState);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleReset() {
    setForm(initialFormState);
  }

  return (
    <>
      <form>
        <h1>Form Store</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
        />
        <br />
        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <p>{JSON.stringify(form)}</p>
      </form>
    </>
  );
}
