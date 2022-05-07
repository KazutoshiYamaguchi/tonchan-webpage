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
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const {
    isOpen,
    onClose,
    onClickHome,
    onClickPhotos,
    onClickMenu,
    onClickAccess,
  } = props;
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="xs">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />

        <DrawerBody p="0" bg={"gray.100"}>
          <Button w="100%" onClick={onClickHome}>
            ホーム
          </Button>
          <Button w="100%" onClick={onClickPhotos}>
            写真
          </Button>
          <Button w="100%" onClick={onClickMenu}>
            メニュー
          </Button>
          <Button w="100%" onClick={onClickAccess}>
            アクセス
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});
