import useFilter from "../useCustomhooks/useFilter";

function SearchData() {
  const initialData = [
    "hari",
    "vicky",
    "vasanth",
    "sakithi",
    "rajesh",
    "kamalesh",
    "sunil",
  ];
  const [filteName, searchData, setSearchData] = useFilter(initialData);
  return (
    <>
      <h1>Search Name</h1>
      <input
        type="text"
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
      />
      <p>Finduser</p>
      {filteName.map((val, ind) => (
        <li key={ind}>{val}</li>
      ))}
    </>
  );
}

export default SearchData;
