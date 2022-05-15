import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import React, { FC, memo } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickHome: () => void;
  onClickPhotos: () => void;
  onClickMenu: () => void;
  onClickAccess: () => void;
  onClickKuchikomi: () => void;
  onClickGithub: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const {
    isOpen,
    onClose,
    onClickHome,
    onClickPhotos,
    onClickMenu,
    onClickAccess,
    onClickKuchikomi,
    onClickGithub,
  } = props;
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="xs">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />

        <DrawerBody p="0" bg={"red.900"}>
          <Button w="100%" bg={"gray.600"} onClick={onClickHome}>
            ホーム
          </Button>
          <Button w="100%" bg={"gray.600"} onClick={onClickPhotos}>
            写真
          </Button>
          <Button w="100%" bg={"gray.600"} onClick={onClickMenu}>
            メニュー
          </Button>
          <Button w="100%" bg={"gray.600"} onClick={onClickAccess}>
            アクセス
          </Button>
          <Button w="100%" bg={"gray.600"} onClick={onClickKuchikomi}>
            口コミ
          </Button>
          <Button w="100%" bg={"gray.600"} onClick={onClickGithub}>
            Github
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});
