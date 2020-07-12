import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store/reducers";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const helloWorld = useSelector((state: State) => state.config.hello);
  return (
    <div>
      <p>{helloWorld}</p>
      <Link to="/about">About</Link>
    </div>
  );
};
