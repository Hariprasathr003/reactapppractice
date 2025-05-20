import { useEffect, useState } from "react";

export default function Fetchuser() {
  const [user, setUser] = useState([]);
  const [loading, setIsLoading] = useState(true);

  async function Fetchdata() {
    try {
      const data = await fetch("https://dummyjson.com/users");
      const result = await data.json();
      setUser(result.users);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }
  useEffect(() => {
    setTimeout(() => {
      console.log("hi useeffect");
      Fetchdata();
    }, 3000);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (!loading) {
    return (
      <>
        <div className="fetchdata">
          <h1>Demo Uesrs</h1>
          <ol>
            {user.map((val) => {
              const { id, firstName, gender, age, email } = val;
              return (
                <li key={id}>
                  <h1>Name :{firstName}</h1>
                  <h3>Gender : {gender}</h3>
                  <h4>Age : {age}</h4>
                  <h5>Email :{email}</h5>
                </li>
              );
            })}
          </ol>
        </div>
      </>
    );
  }
}
