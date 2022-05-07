import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React, { FC, memo } from "react";

type Props = {
  onOpen: () => void;
};

export const MenuIconButton: FC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="memu-button"
      icon={<HamburgerIcon />}
      size="sm"
      variant={"unstyled"}
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
});
