import React, { useEffect } from "react";
import UserList from "../users/userList/UserList";
import { connect } from "react-redux";
import * as usersActions from "../../store";
import getFilteredUsers from "../../selectors/getFilteredUsers";

const Main = ({ users, fetchUsers, searchValue }) => {
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

const mapStateToProps = state => {
  return {
    users: state.users.users,
    searchValue: state.searchValue.searchValue
  };
};

export default connect(mapStateToProps, usersActions)(Main);
