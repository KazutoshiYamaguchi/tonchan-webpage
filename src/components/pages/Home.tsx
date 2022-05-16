import React, { useState } from "react";
import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax";

import { Hero } from "../atoms/Hero";
import { HomeDrinkMenu } from "../atoms/home/HomeDrinkMenu";
import { HomeFoodMenu } from "../atoms/home/HomeFoodMenu";

export const Home = () => {
  const [homeOnEnter, setHomeOnEnter] = useState(false);
  const [drinkOnEnter, setDrinkHomeOnEnter] = useState(false);

  return (
    <>
      <Hero />
      <Parallax
        onEnter={() => setHomeOnEnter(true)}
        onExit={() => setHomeOnEnter(false)}
      >
        {homeOnEnter && <HomeFoodMenu />}
      </Parallax>
      <Parallax
        onEnter={() => setDrinkHomeOnEnter(true)}
        onExit={() => setDrinkHomeOnEnter(false)}
      >
        {drinkOnEnter && <HomeDrinkMenu />}
      </Parallax>
    </>
  );
};
