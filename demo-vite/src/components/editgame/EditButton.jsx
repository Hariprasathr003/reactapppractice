import { useState } from "react";
import "../css/editbutton.css";

export default function EditButton({ intialname, Symbol ,isActive}) {
  const [changename, setname] = useState(intialname);

  const [isedit, setedit] = useState(false);

  function handleedit() {
    setedit((edit) => !edit);
  }

  function handlechange(event) {
    setname(event.target.value);
  }

  let editName = <span>{changename}</span>;

  if (isedit) {
    editName = (
      <input type="text" required value={changename} onChange={handlechange} />
    );
  }

  return (
    <li className={isActive?"Active":undefined}>
      <span >
        {editName}
        <span id="symbol">{Symbol}</span>
      </span>
      <button onClick={handleedit}>{isedit ? "SAVE" : "EDIT"}</button>
    </li>
  );
}
