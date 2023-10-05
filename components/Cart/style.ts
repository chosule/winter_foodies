import styled from "@emotion/styled";
import { CSSProperties } from "react";

const Flex = styled.div<
  Pick<CSSProperties, "flexDirection" | "justifyContent" | "gap">
>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;
  height: 100%;
  flex-direction: ${({ flexDirection }) => flexDirection};
  gap: ${({ gap }) => gap};
`;

const Text = styled.p<Pick<CSSProperties, "fontSize" | "color">>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => (color ? color : "#000")};
`;

export const CartUI = { Flex, Text } as const;
