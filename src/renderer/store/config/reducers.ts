import { ConfigActions, ConfigState } from "./types";

const initialState: ConfigState = {
  hello: "Hello world!",
};

export const configReducer = (state = initialState, action: ConfigActions) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
