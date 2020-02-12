import { FETCH_USER, FETCH_USER_DETAILS } from "../actions/types";

const initState = {
  users: [],
  details: []
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        users: action.user
      };
    case FETCH_USER_DETAILS:
      return {
        ...state,
        details: action.details
      };

    default:
      return state;
  }
};

export default userReducer;
