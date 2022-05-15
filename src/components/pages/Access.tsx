import {
  AspectRatio,
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

import { SubHero } from "../atoms/Subhero";
import access from "../../images/access.jpeg";

export const Access = () => {
  return (
    <>
      <SubHero image={access} text="- アクセス -" />
      <Box maxWidth={{ base: "100%", md: "70%" }} m="auto">
        <AspectRatio ratio={16 / 9}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.3951490950985!2d139.43578332893642!3d35.469765917054914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601855e4600e2709%3A0xe8ec9c0c1cb21446!2z5bGx5Y-j44Go44KT44Gh44KD44KT5bmz5ZKM6LuS!5e0!3m2!1sen!2sjp!4v1651843517937!5m2!1sen!2sjp" />
        </AspectRatio>
        <TableContainer my={3}>
          <Table size="sm">
            <Tbody>
              <Tr>
                <Td>店名</Td>
                <Td>平和軒　山口とんちゃん (ヘイワケン　ヤマグチトンチャン)</Td>
              </Tr>
              <Tr>
                <Td>住所</Td>
                <Td>〒242-0028 神奈川県大和市桜森2-7-6</Td>
              </Tr>
              <Tr>
                <Td>営業時間</Td>
                <Td>15:00～22:00　(L.O21:40)</Td>
              </Tr>
              <Tr>
                <Td>定休日</Td>
                <Td>
                  月・木
                  <p>(祝日・年末年始など不定期に営業する場合がございます)</p>
                </Td>
              </Tr>
              <Tr>
                <Td>電話番号</Td>
                <Td>046-261-3140</Td>
              </Tr>
              <Tr>
                <Td>アクセス</Td>
                <Td>
                  相模鉄道「相模大塚駅」南口より徒歩1分
                  <p>相模大塚駅から110m</p>
                </Td>
              </Tr>
              <Tr>
                <Td>駐車場</Td>
                <Td>
                  あり<p>20台</p>
                </Td>
              </Tr>
              <Tr>
                <Td>最寄駅</Td>
                <Td>本線 相模大塚駅</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
