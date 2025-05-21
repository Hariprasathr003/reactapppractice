import Contactinfo from "../withoutContext/Contactinfo";
function StudentRole({ studentRole, contactInfo }) {
  console.log(studentRole, "sturollllll");

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
      <Contactinfo contactInfo={contactInfo} />
    </>
  );
}

export default StudentRole;
