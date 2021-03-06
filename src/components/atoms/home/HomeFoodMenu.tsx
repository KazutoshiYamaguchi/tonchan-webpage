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
import foodImage from "../../../images/HomeFoodImage.jpeg";

export const HomeFoodMenu = () => {
  const history = useHistory();
  const onClickMenu = () => {
    history.push("/menu");
  };
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Parallax translateX={["100px", "-100px"]}>
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
                地元に愛される
              </Text>
              <br />
              <Text color={"red.500"} as={"span"}>
                安くて、美味しい炭火焼肉、ホルモン屋さん
              </Text>
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }}>
              地元で65年間愛され続けている老舗の炭火焼肉、ホルモン屋さんです。
              美味しいお肉をお腹一杯食べていただきたいため、お手頃価格で提供致します。
              食べるべき一品は焼肉（カシラ）是非、ご堪能ください。
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"red.800"}
                color={"white"}
                _hover={{
                  bg: "red.900",
                }}
                onClick={onClickMenu}
              >
                お料理はこちら
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Parallax>
      <Parallax translateX={["100px", "-100px"]}>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={foodImage}
            borderRadius={10}
          />
        </Flex>
      </Parallax>
    </Stack>
  );
};
