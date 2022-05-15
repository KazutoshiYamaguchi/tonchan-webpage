import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  image: string;
  text: string;
};

export const SubHero: React.FC<Props> = (props) => {
  const { image, text } = props;
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      my={5}
      backgroundImage={image}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      height="60px"
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
          >
            {text}
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
};
