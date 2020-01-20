import React from "react";
import "./UserSummary.css";
import { NavLink } from "react-router-dom";

const UserSummary = ({ user }) => {
  return (
    <div className="userSummary">
      <div className="userSummary__id">
        <span>user_id:</span>
        <p>{user.id}</p>
      </div>
      <div className="userSummary__name">
        <span>name:</span>
        <p>{user.name}</p>
      </div>
      <NavLink to={`/user/` + user.id}>
        <button className="userSummary__btn">details</button>
      </NavLink>
    </div>
  );
};

export default UserSummary;
