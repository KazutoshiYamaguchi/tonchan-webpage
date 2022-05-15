import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useHistory } from "react-router";

import { Menus } from "../atoms/menu/Menus";
import { SubHero } from "../atoms/Subhero";

export const Menu = () => {
  const history = useHistory();
  const onClickDrink = () => history.push("/drink");
  return (
    <>
      <Box maxWidth={{ base: "90%", md: "70%" }} margin="auto">
        <Flex justify={"center"} alignItems="center" gap={2} m={5}>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="white"
            variant="outline"
          >
            お料理
          </Button>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="white"
            variant="outline"
            onClick={onClickDrink}
          >
            お飲み物
          </Button>
        </Flex>

        {Menus.map((menu, index) => (
          <>
            <SubHero image={menu.image} text={menu.title} />
            <TableContainer key={index}>
              <Table variant="simple">
                <Tbody>
                  {menu.menus.map((m, i) => (
                    <Tr key={i}>
                      <Td>{m.name}</Td>
                      <Td>{m.price} </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </>
        ))}
      </Box>
    </>
  );
};
