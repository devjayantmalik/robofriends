import {
  SEARCH_BY_NAME,
  SEARCH_BY_ID,
  SEARCH_BY_EMAIL,
  CLEAR_SEARCH,
} from "./types";

const INITIAL_STATE = {
  names: [],
  emails: [],
  ids: [],
  isSearching: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_BY_NAME:
      return { ...state, names: action.payload, isSearching: true };
    case SEARCH_BY_EMAIL:
      return { ...state, emails: action.payload, isSearching: true };
    case SEARCH_BY_ID:
      return { ...state, ids: action.payload, isSearching: true };
    case CLEAR_SEARCH:
      return INITIAL_STATE;
    default:
      return state;
  }
};
