import React from "react";
import "./UserSummary.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { searchValueAction } from "../../../redux/actions/searchAction";

const UserSummary = ({ searchValueAction, user }) => {
  const handleClick = () => {
    searchValueAction("");
  };
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
      <NavLink onClick={() => handleClick()} to={`/user/` + user.id}>
        <button className="userSummary__btn">details</button>
      </NavLink>
    </div>
  );
};
const mapDispatchToProps = { searchValueAction };
export default connect(null, mapDispatchToProps)(UserSummary);
