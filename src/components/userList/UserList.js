import React from "react";
import "./UserList.css";
import UserSummary from "../userSummary/UserSummary";
const UserList = ({ users }) => {
  const user =
    users &&
    users.map(user => {
      return <UserSummary key={user.id} user={user} />;
    });

  return <div className="userList">{user}</div>;
};

export default UserList;
