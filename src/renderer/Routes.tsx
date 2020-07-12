import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { AboutPage } from "./pages/about/AboutPage";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};
