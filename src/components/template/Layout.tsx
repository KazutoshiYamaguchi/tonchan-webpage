import React, { ReactNode } from "react";
import { Footer } from "../atoms/Footer";
import { Header } from "../atoms/Header";
import { Hero } from "../atoms/Hero";

type Props = {
  children: ReactNode;
};

export const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Hero />
      <div>{children}</div>
      <Footer />
    </>
  );
};
