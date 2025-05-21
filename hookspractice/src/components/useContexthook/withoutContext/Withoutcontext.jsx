import { studentDetails, studentRole, contactInfo } from "../Data.js";
import StudentRole from "../withoutContext/Studentrole.jsx";
function Withoutcontext() {
  console.log("hellllll", studentDetails);

  return (
    <>
      <div className="Withoutcontext">
        {studentDetails.map((val) => {
          return (
            <div key={val.id}>
              <h1>{val.name}</h1>
              <h1>{val.age}</h1>
            </div>
          );
        })}
      </div>
      <StudentRole studentRole={studentRole} contactInfo={contactInfo} />;
    </>
  );
}

export default Withoutcontext;
