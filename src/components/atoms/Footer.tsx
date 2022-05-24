import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { ReactNode, useCallback } from "react";

const SocialButton = ({
  children,
  label,

  onClick,
}: {
  children: ReactNode;
  label: string;

  onClick: () => void;
}) => {
  return (
    <chakra.button
      onClick={onClick}
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  const onClickInstagram = useCallback(() => {
    window.open("https://www.instagram.com/heiwaken_1954/");
  }, []);
  return (
    <Box
      bg={useColorModeValue("red.900", "red.900")}
      color={useColorModeValue("gray.50", "gray.50")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2022 Yamaguchi Tonchan. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Instagram"} onClick={onClickInstagram}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};
