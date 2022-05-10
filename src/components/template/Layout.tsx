import React, { ReactNode } from "react";
import { Footer } from "../atoms/Footer";
import { Header } from "../atoms/Header";

type Props = {
  children: ReactNode;
};

export const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />

      <div>{children}</div>
      <Footer />
    </>
  );
};
