import { SEARCH_VALUE } from "./types";

export function searchValueAction(searchValue) {
  return {
    type: SEARCH_VALUE,
    searchValue
  };
}
