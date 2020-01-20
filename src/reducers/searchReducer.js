import { SEARCH_VALUE } from "../actions/types";

const initialState = {
  searchValue: ""
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.searchValue
      };

    default:
      return state;
  }
};

export default searchReducer;
