import { createStore } from "redux";
import reducers from "./reducers";

export const getStore = () => {
  const store = createStore(reducers);

  return store;
};
