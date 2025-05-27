import React, { useEffect, useState } from "react";

const FetchDataApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function datafetch() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    // setTimeout(() => {
    datafetch();
    // }, 2000);
  }, []);
  if (loading) return <p>Loading...</p>;
  return (
    <>
      <h2>FetchDataApi</h2>
      <ul>
        {data.map((val) => (
          <li key={val.id}>{val.name}</li>
        ))}
      </ul>
    </>
  );
};

export default FetchDataApi;
