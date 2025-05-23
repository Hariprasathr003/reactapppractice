// src/Pages/Login.jsx
import { useState } from "react";
import "../cssstyle/login/Login.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [loginDataEmail, setLoginDataEmail] = useState("");
  const [loginDataPass, setLoginDataPass] = useState("");
  const [storeLoginData, setStoreLoginData] = useState([]);

  //localstorage to store

  useEffect(() => {
    const stored = localStorage.getItem("loginData");
    if (stored) {
      setStoreLoginData(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("loginData", JSON.stringify(storeLoginData));
  }, [storeLoginData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      if (loginDataEmail && loginDataPass) {
        const updateData = {
          id: Date.now(),
          email: loginDataEmail,
          pass: loginDataPass,
        };
        console.log(updateData);

        setStoreLoginData([...storeLoginData, updateData]);
        setLoginDataEmail("");
        setLoginDataPass("");
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={loginDataEmail}
          onChange={(e) => setLoginDataEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={loginDataPass}
          onChange={(e) => setLoginDataPass(e.target.value)}
          required
        />

        <div className="forgetpass">
          <Link to="/forgot">Forgot Password?</Link>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
