import { FETCH_ALL } from "./types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
