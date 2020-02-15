import { SET_LOGIN_PENDING } from "../actions/types";
import { SET_LOGIN_SUCCESS } from "../actions/types";
import { SET_LOGIN_ERROR } from "../actions/types";

const initialState = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return {
        ...state,
        isLoginPending: action.isLoginPending
      };

    case SET_LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSuccess: action.isLoginSuccess
      };

    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.loginError
      };

    default:
      return state;
  }
};
export default loginReducer;
