import { useState } from "react";

function useFilter(initialData) {
  const [searchData, setSearchData] = useState("");
  const filteName = initialData.filter((val) =>
    val.toLowerCase().includes(searchData.toLowerCase())
  );
  return [filteName, searchData, setSearchData];
}

export default useFilter;
