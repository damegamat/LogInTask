import { createStore } from "redux";

const rootReducer = () => {
  console.log("ok");
};
const store = createStore(rootReducer);

export default store;
