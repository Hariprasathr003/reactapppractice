export default function Datastore({ storedata, setStoredata }) {
  function handleDelete(currettIndex) {
    const deleteOneItem = storedata.filter((val) => val.id !== currettIndex);
    setStoredata(deleteOneItem);
  }
  function handleDeleteAll() {
    setStoredata([]);
  }
  return (
    <>
      <div className="dataStoreSection">
        {storedata.map((val) => {
          return (
            <ul key={val.id}>
              <h1>Create Employee Details</h1>
              <li>{val.name}</li>
              <li>{val.age}</li>
              <li>{val.mobileNumber}</li>
              <li>{val.mail}</li>
              <button onClick={() => handleDelete(val.id)}>Delete</button>
            </ul>
          );
        })}
      </div>
      <button onClick={handleDeleteAll}>DeleteAll</button>
    </>
  );
}
