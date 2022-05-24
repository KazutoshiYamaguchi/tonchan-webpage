import { Box } from "@chakra-ui/react";
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
      <Box style={{ height: "60px" }}></Box>
      <div>{children}</div>
      <Footer />
    </>
  );
};
