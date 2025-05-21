import { useContext } from "react";
import Contactinfo from "../withContext/Contactinfo.jsx";
import { studentContext } from "./StudentDetails.jsx";
function StudentRole() {
  const { studentRole } = useContext(studentContext);
  console.log(studentRole, 'role student');
  
  return (
    <>
      <div className="StudentRole">
        {studentRole.map((val) => {
          return (
            <li key={val.id}>
              <h1>{val.role}</h1>
              <h1>{val.experience}</h1>
            </li>
          );
        })}
      </div>
      <Contactinfo />
    </>
  );
}

export default StudentRole;
