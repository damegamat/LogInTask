import { FETCH_USER, FETCH_USER_DETAILS } from "./types";

export function fetchUsersAction(user) {
  return {
    type: FETCH_USER,
    user
  };
}

export function fetchUserDetailsAction(details) {
  return {
    type: FETCH_USER_DETAILS,
    details
  };
}
