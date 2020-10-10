import { robots } from "../../data/robots";
import { FETCH_ALL } from "./types";

export const fetchAll = () => {
  return { type: FETCH_ALL, payload: robots };
};
