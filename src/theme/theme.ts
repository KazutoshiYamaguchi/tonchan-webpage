import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#444447",
        color: "gray.50",
      },
    },
  },
});

export default theme;
