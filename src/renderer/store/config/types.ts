import { FETCH_CONFIG } from "./actions";

export type ConfigState = {
  hello: string;
};

export type FetchConfigAction = {
  type: typeof FETCH_CONFIG;
};

export type ConfigActions = FetchConfigAction;
