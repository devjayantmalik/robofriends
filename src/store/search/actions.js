import {
  SEARCH_BY_ID,
  SEARCH_BY_EMAIL,
  SEARCH_BY_NAME,
  CLEAR_SEARCH,
} from "./types";
import { robots } from "../../data/robots";

export const searchByEmail = (email, callback) => {
  const filtered = robots.filter((robot) =>
    robot.email.toLowerCase().includes(email.toLowerCase()) ? robot : null
  );

  if (!!callback) {
    callback();
  }

  return { type: SEARCH_BY_EMAIL, payload: filtered };
};

export const searchById = (id, callback) => {
  const filtered = robots.filter((robot) => robot.id === id);

  if (!!callback) {
    callback();
  }

  return { type: SEARCH_BY_ID, payload: filtered };
};

export const searchByName = (name, callback) => {
  const filtered = robots.filter((robot) =>
    robot.name.toLowerCase().includes(name.toLowerCase()) ? robot : null
  );

  if (!!callback) {
    callback();
  }

  return { type: SEARCH_BY_NAME, payload: filtered };
};

export const clearSearch = () => {
  return { type: CLEAR_SEARCH };
};
