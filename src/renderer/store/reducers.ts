import { combineReducers } from "redux";
import { configReducer as config } from "./config/reducers";

export const reducers = combineReducers({
  config,
});

export type State = ReturnType<typeof reducers>;
