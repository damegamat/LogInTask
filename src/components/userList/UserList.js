import React from "react";
import "./UserList.css";
import UserSummary from "../userSummary/UserSummary";
const UserList = () => {
  return (
    <div className="userList">
      <UserSummary />
      <UserSummary />
      <UserSummary />
      <UserSummary />
      <UserSummary />
    </div>
  );
};

export default UserList;
