import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import rootReducer from "./reducer/index";

// const rootReducer = () => {
//   console.log("ok");
// };
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

store.dispatch({ type: "TO", text: "asda" });

export default store;
