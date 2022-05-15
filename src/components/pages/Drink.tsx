import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
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
  Box,
  Stack,
} from "@chakra-ui/react";
import { useHistory } from "react-router";

import { Drinks } from "../atoms/menu/Drinks";
import { SubHero } from "../atoms/Subhero";

export const Drink = () => {
  const history = useHistory();
  const onClickMenu = () => history.push("/menu");

  return (
    <>
      <Box maxWidth={{ base: "90%", md: "70%" }} margin="auto">
        <Flex justify={"center"} alignItems="center" gap={2} m={5}>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="white"
            variant="outline"
            onClick={onClickMenu}
          >
            お料理
          </Button>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="white"
            variant="outline"
          >
            お飲み物
          </Button>
        </Flex>
        {Drinks.map((menu, index) => (
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
