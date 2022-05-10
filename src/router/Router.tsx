import React from "react";
import { Route, Switch } from "react-router-dom";

import { Layout } from "../components/template/Layout";
import { HomeRoutes } from "./HomeRoutes";

export const Router = () => {
  return (
    <Switch>
      <Route
        path="/"
        render={({ match: { url } }) => (
          <Switch>
            {HomeRoutes.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                <Layout>{route.children}</Layout>
              </Route>
            ))}
          </Switch>
        )}
      />
    </Switch>
  );
};
