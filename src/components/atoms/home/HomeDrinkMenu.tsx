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

export const HomeDrinkMenu = () => {
  const history = useHistory();

  const onClickDrink = () => {
    history.push("/drink");
  };
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
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
                bg: "green.400",
                zIndex: -1,
              }}
            >
              お飲物も豊富
            </Text>
            <br /> <Text color={"green.400"} as={"span"}></Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }}>
            焼肉と一緒にお酒を嗜む...そんなひと時をお楽しみください。
            焼酎はボトルもご用意しております。
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"green.400"}
              color={"white"}
              _hover={{
                bg: "green.500",
              }}
              onClick={onClickDrink}
            >
              お飲み物はこちら
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1591243315780-978fd00ff9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          }
          borderRadius={10}
        />
      </Flex>
    </Stack>
  );
};
