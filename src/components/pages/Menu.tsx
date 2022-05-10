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
import { Hero } from "../atoms/Hero";

import { Menus } from "../atoms/menu/Menus";

export const Menu = () => {
  const history = useHistory();
  const onClickDrink = () => history.push("/drink");
  return (
    <>
      <Hero />
      <Flex justify={"center"} alignItems="center" gap={2} m={5}>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="blue"
          variant="outline"
        >
          お料理
        </Button>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="green"
          variant="outline"
          onClick={onClickDrink}
        >
          お飲み物
        </Button>
      </Flex>

      {Menus.map((menu, index) => (
        <TableContainer key={index}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>
                  <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                    <Text color={"blue.400"} as="h3">
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
