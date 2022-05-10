import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useHistory } from "react-router";

import { MenuDrawer } from "../molecule/MenuDrawer";
import { MenuIconButton } from "./button/MenuIconButton";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const history = useHistory();
  const onClickHome = useCallback(() => {
    history.push("/");
    onClose();
  }, [history]);
  const onClickPhotos = useCallback(() => {
    history.push("/photos");
    onClose();
  }, [history]);
  const onClickMenu = useCallback(() => {
    history.push("/menu");
    onClose();
  }, [history]);
  const onClickAccess = useCallback(() => {
    history.push("/access");
    onClose();
  }, [history]);
  const onClickKuchikomi = useCallback(() => {
    history.push("/kuchikomi");
    onClose();
  }, [history]);
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            平和軒山口とんちゃん
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          display={{ base: "none", md: "flex" }}
          flexGrow={2}
        >
          <Box pr={4}>
            <Link onClick={onClickHome}>ホーム</Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickPhotos}>写真</Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickMenu}>メニュー</Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickAccess}>アクセス</Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickKuchikomi}>口コミ</Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickPhotos={onClickPhotos}
        onClickMenu={onClickMenu}
        onClickAccess={onClickAccess}
        onClickKuchikomi={onClickKuchikomi}
      />
    </>
  );
};
