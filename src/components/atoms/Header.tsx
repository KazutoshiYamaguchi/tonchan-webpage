import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useHistory } from "react-router";

import { MenuDrawer } from "../molecule/MenuDrawer";
import { MenuIconButton } from "./button/MenuIconButton";
import styles from "./Header.module.css";

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
  const onClickGithub = useCallback(() => {
    window.open("https://github.com/KazutoshiYamaguchi/tonchan-webpage");
  }, []);
  return (
    <>
      <Flex
        style={{ position: "fixed", width: "100%", top: 0 }}
        zIndex={1}
        as="nav"
        bg="red.900"
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
          <Heading
            as="h1"
            fontSize={{ base: "md", md: "lg" }}
            className={styles.title}
          >
            平和軒山口とんちゃん
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          display={{ base: "none", md: "flex" }}
          flexGrow={2}
        >
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={onClickHome}>ホーム</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink as={Link} onClick={onClickPhotos}>
                写真
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink onClick={onClickMenu}>メニュー</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={onClickAccess}>アクセス</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={onClickKuchikomi}>口コミ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink onClick={onClickGithub}>Github</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
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
        onClickGithub={onClickGithub}
      />
    </>
  );
};
