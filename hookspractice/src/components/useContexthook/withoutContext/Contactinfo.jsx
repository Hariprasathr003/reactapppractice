function Contactinfo({ contactInfo }) {
  console.log(contactInfo, "contaa");

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
