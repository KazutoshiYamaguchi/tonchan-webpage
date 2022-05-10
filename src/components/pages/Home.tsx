import React from "react";
import { Hero } from "../atoms/Hero";
import { HomeDrinkMenu } from "../atoms/home/HomeDrinkMenu";
import { HomeFoodMenu } from "../atoms/home/HomeFoodMenu";

export const Home = () => {
  return (
    <>
      <Hero />
      <HomeFoodMenu />
      <HomeDrinkMenu />
    </>
  );
};
