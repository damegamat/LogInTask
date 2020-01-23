import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import "./SignIn.css";
import { connect, useDispatch } from "react-redux";
import { authAction } from "../../actions/authAction";
import userReducer from "../../reducers/userReducer";

function SignIn(props) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ username: "", password: "" });
  const [auth, setAuth] = useState(false);
  const auths = sessionStorage.getItem("auth");

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    if (form.username.length > 4 && form.password.length > 4) {
      props.history.push("/");
      setAuth(true);
      dispatch(authAction(true));
      sessionStorage.setItem("auth", true);
      console.log("ok");
    } else {
      sessionStorage.setItem("auth", false);
    }
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

const mapStateToProps = state => {
  return {
    auths: state.auth
  };
};

export default connect(mapStateToProps)(SignIn);
