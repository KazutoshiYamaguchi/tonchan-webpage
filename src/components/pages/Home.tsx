import React from "react";
import { HomeDrinkMenu } from "../atoms/home/HomeDrinkMenu";
import { HomeFoodMenu } from "../atoms/home/HomeFoodMenu";

export const Home = () => {
  return (
    <>
      <HomeFoodMenu />
      <HomeDrinkMenu />
    </>
  );
};
