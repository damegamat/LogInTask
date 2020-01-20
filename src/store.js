import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import "./actions/userActions";
import {
  fetchUsersAction,
  fetchUserDetailsAction
} from "./actions/userActions";
import axios from "axios";

const store = createStore(rootReducer, applyMiddleware(thunk));

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

export default store;
