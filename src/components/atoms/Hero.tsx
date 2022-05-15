import {
  Flex,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Header.module.css";
import heroImage from "../../images/hero.jpeg";

export const Hero = () => {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={heroImage}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            className={styles.title}
          >
            平和軒山口とんちゃん
          </Text>
          <Stack direction={"row"}></Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};
