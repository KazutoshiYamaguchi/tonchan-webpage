import React from "react";

import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import theme from "./theme/theme";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <BrowserRouter>
      <ParallaxProvider>
        <ChakraProvider theme={theme}>
          <Router />
        </ChakraProvider>
      </ParallaxProvider>
    </BrowserRouter>
  );
}

export default App;
