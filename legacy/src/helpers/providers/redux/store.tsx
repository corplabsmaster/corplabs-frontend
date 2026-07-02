import { createStore as reduxCreateStore, combineReducers } from "redux";

import app from "@pages/app";

export const createReduxStore = () =>
  reduxCreateStore(combineReducers({ app }));
