import { combineReducers } from "redux";
import searchReducer from "./search/reducer";
import robotsReducer from "./robots/reducer";

export default combineReducers({
  search: searchReducer,
  robots: robotsReducer,
});
