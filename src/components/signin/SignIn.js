import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  setLoginPending,
  setLoginSuccess,
  setLoginError
} from "../../redux/actions/loginActions";

import "./SignIn.css";

function SignIn() {
  const history = useHistory();
  const isLoginPending = useSelector(
    state => state.loginReducer.isLoginPending
  );
  const isLoginSuccess = useSelector(
    state => state.loginReducer.isLoginSuccess
  );
  const loginError = useSelector(state => state.loginReducer.loginError);

  const dispatch = useDispatch();
  const [form, setForm] = useState({ username: "", password: "" });
  const [formErrors, setFormErrors] = useState({ username: "", password: "" });

  const validate = () => {
    const matchPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (form.username.length < 5) {
      setFormErrors({
        ...formErrors,
        username: "username must be at least 5 characters long"
      });
      return false;
    } else if (!matchPassword.test(form.password)) {
      setFormErrors({
        username: "",
        password:
          "password must be at least 8 characters long, contain at least one small letter, one capital letter and one number "
      });
      return false;
    } else {
      return true;
    }
  };
  const callLogin = callback => {
    setTimeout(() => {
      if (validate()) {
        sessionStorage.setItem("auth", true);
        setTimeout(() => {
          history.push("/");
        }, 1000);

        return callback(null);
      } else {
        sessionStorage.setItem("auth", false);
        return callback(new Error("Invalid email and password"));
      }
    }, 1000);
  };

  const login = () => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    callLogin(error => {
      dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(error));
      }
      setTimeout(() => {
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));
      }, 3000);
    });
  };
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    login();
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
        <div className="error">{formErrors.username}</div>
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          value={form.password}
          onChange={e => handleChange(e)}
        />
        <div className="error">{formErrors.password}</div>
        <input type="submit" value="Login" />
      </form>
      <div className="notification">
        {isLoginPending && <div>Please wait...</div>}
        {isLoginSuccess && <div>Success.</div>}
        {loginError && <div>{loginError.message}</div>}
      </div>
    </div>
  );
}

export default connect(null)(SignIn);
