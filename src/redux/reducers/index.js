import userReducer from "./userReducer";
import searchReducer from "./searchReducer";
import loginReducer from "./loginReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  users: userReducer,
  searchValue: searchReducer,
  login: loginReducer
});
export default rootReducer;
