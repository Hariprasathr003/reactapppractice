import { studentContext } from "./StudentDetails.jsx";
import { useContext } from "react";
function Contactinfo() {
  const { contactInfo } = useContext(studentContext);
  return (
    <div className="Contactinfo">
      {contactInfo.map((val) => (
        <li key={val.id}>
          <p>{val.address}</p>
          <p>{val.phonenumber}</p>
        </li>
      ))}
    </div>
  );
}

export default Contactinfo;
