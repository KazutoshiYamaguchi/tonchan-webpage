import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useHistory } from "react-router";
import { Parallax } from "react-scroll-parallax";

import drinkImage from "../../../images/alchoholeImage.jpeg";

export const HomeDrinkMenu: React.FC = () => {
  const history = useHistory();

  const onClickDrink = () => {
    history.push("/drink");
  };
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Parallax translateX={["-100px", "100px"]}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack
            spacing={6}
            w={"full"}
            maxW={"lg"}
            bg="whiteAlpha.500"
            p={7}
            borderRadius={10}
          >
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "red.800",
                  zIndex: -1,
                }}
              >
                お飲物も豊富
              </Text>
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }}>
              焼肉と一緒にお酒を嗜む...そんなひと時をお楽しみください。
              焼酎はボトルもご用意しております。
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"red.800"}
                color={"white"}
                _hover={{
                  bg: "red.900",
                }}
                onClick={onClickDrink}
              >
                お飲み物はこちら
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Parallax>
      <Parallax translateX={["-100px", "100px"]}>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={drinkImage}
            borderRadius={10}
          />
        </Flex>
      </Parallax>
    </Stack>
  );
};
