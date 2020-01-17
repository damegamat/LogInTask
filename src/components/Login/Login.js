import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import "./Login.css";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = e => {
    const data = e.target.name;
    if (data === "username") {
      setUsername(e.target.value);
    } else if (data === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
  };

  return (
    <div className="loginContent">
      <h1>Login</h1>
      <form onSubmit={e => handleSubmitForm(e)}>
        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
          value={username}
          onChange={e => handleChange(e)}
        />

        <input
          type="password"
          placeholder="password"
          name="password"
          id="uassword"
          value={password}
          onChange={e => handleChange(e)}
        />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
