import React from "react";

import './app.css';

const { ipcRenderer } = require("electron");

ipcRenderer
    .invoke("asyncTest", { testMessage: "Асинхронная функция" })
    .then((result: string) => {
      console.log(result);
    })
    .catch(error => {
      console.log("Ошибка ебаная", 123);
    });

ipcRenderer.invoke("syncTest", { testMessage: "Синхронная функция" }).then(result => {
  console.log(result);
});

export default function App() {
  return <p>Rollup + TypeScript + React = ❤️</p>;
}
