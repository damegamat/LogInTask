import React, { useEffect } from "react";
import UserList from "../users/userList/UserList";
import { connect, useSelector } from "react-redux";
import * as usersActions from "../../store";
import getFilteredUsers from "../../selectors/getFilteredUsers";

const Main = ({ fetchUsers }) => {
  const searchValue = useSelector(state => state.searchValue.searchValue);
  const users = useSelector(state => state.users.users);
  let currentUsers;

  useEffect(() => {
    fetchUsers();
  }, []);

  if (users.length > 0) {
    currentUsers = getFilteredUsers(users, searchValue);
  } else {
    currentUsers = users;
  }

  return <UserList users={currentUsers} />;
};

export default connect(null, usersActions)(Main);
