import authReducer from "./authReducer";
import userReducer from "./userReducer";
import searchReducer from "./searchReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
  searchValue: searchReducer
});
export default rootReducer;
