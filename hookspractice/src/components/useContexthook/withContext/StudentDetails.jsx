import { studentDetails, studentRole, contactInfo } from "../Data.js";
import StudentRole from "../withContext/StudentRole.jsx";

import { createContext } from "react";
export const studentContext = createContext();

function StudentDetails() {
  console.log("hellllll", studentDetails);
  return (
    <>
      <studentContext.Provider
        value={{ studentDetails, studentRole, contactInfo }}
      >
        <div className="Withcontext">
          {studentDetails.map((val) => {
            return (
              <div key={val.id}>
                <h1>{val.name}</h1>
                <h1>{val.age}</h1>
              </div>
            );
          })}
        </div>
        <StudentRole />;
      </studentContext.Provider>
    </>
  );
}

export default StudentDetails;
