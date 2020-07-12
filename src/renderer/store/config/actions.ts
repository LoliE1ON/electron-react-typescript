import { FetchConfigAction } from "./types";

export const FETCH_CONFIG = "FETCH_CONFIG";

// Action creators
export function fetchConfig(): FetchConfigAction {
  return {
    type: FETCH_CONFIG,
  };
}
