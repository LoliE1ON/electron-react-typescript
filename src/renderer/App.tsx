import React from "react";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { HelloWorld } from "./HelloWorld";

const { ipcRenderer } = require("electron");

ipcRenderer
  .invoke("asyncTest", { testMessage: "Async function" })
  .then((result: string) => {
    console.log(result);
  })
  .catch((error: any) => {
    console.log("Error");
  });

ipcRenderer.invoke("syncTest", { testMessage: "Sync function" }).then((result: string) => {
  console.log(result);
});

export const App = () => {
  return (
    <Provider store={store}>
      <HelloWorld />
    </Provider>
  );
};
