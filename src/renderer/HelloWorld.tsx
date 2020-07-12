import React from "react";
import { useSelector } from "react-redux";
import { State } from "./store/reducers";

export const HelloWorld = () => {
  const helloWorld = useSelector((state: State) => state.config.hello);
  return <p>{helloWorld}</p>;
};
