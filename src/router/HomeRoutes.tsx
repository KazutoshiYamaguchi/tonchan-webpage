import React from "react";
import { Access } from "../components/pages/Access";
import { Drink } from "../components/pages/Drink";
import { Home } from "../components/pages/Home";
import { Menu } from "../components/pages/Menu";
import { Page404 } from "../components/pages/Page404";
import { Photos } from "../components/pages/Photos";

export const HomeRoutes = [
  {
    path: "",
    exact: true,
    children: <Home />,
  },
  {
    path: "photos",
    index: false,
    children: <Photos />,
  },
  {
    path: "menu",
    index: false,
    children: <Menu />,
  },
  {
    path: "drink",
    index: false,
    children: <Drink />,
  },
  {
    path: "access",
    index: false,
    children: <Access />,
  },
  {
    path: "*",
    index: false,
    children: <Page404 />,
  },
];
