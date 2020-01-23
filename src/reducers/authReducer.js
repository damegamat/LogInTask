import { AUTH } from "../actions/types";

const initState = false;

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        auth: action.auth
      };

    default:
      return state;
  }
};

export default authReducer;
