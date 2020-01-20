import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import "./SignIn.css";
function SignIn() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="loginContent">
      <h1>Sign In</h1>
      <form onSubmit={e => handleSubmitForm(e)}>
        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
          value={form.username}
          onChange={e => handleChange(e)}
        />

        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          value={form.password}
          onChange={e => handleChange(e)}
        />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default SignIn;
