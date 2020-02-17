import {
  fetchUsersAction,
  fetchUserDetailsAction
} from "../redux/actions/userActions";
import axios from "axios";

export function fetchUsers() {
  return dispatch => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        dispatch(fetchUsersAction(response.data));
      });
  };
}

export function fetchUsersDetails(id) {
  return dispatch => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        dispatch(fetchUserDetailsAction(response.data));
      });
  };
}
