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
} from "@chakra-ui/react";
import { useHistory } from "react-router";

import { Drinks } from "../atoms/menu/Drinks";

export const Drink = () => {
  const history = useHistory();
  const onClickMenu = () => history.push("/menu");

  return (
    <>
      <Flex justify={"center"} alignItems="center" gap={2} m={5}>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="blue"
          variant="outline"
          onClick={onClickMenu}
        >
          お料理
        </Button>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="green"
          variant="outline"
        >
          お飲み物
        </Button>
      </Flex>
      {Drinks.map((menu, index) => (
        <TableContainer key={index}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>
                  <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                    <Text color={"green.400"} as="h3">
                      {menu.title}
                    </Text>
                  </Heading>
                </Th>
              </Tr>
            </Thead>
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
      ))}
    </>
  );
};
