import styled from "@emotion/styled";
import { CSSProperties } from "react";

const Wrap = styled.div<{ padding: string }>`
  width: 100%;
`;
const Flex = styled.div<
  Pick<
    CSSProperties,
    | "flexDirection"
    | "justifyContent"
    | "gap"
    | "alignItems"
    | "padding"
    | "height"
  >
>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  height: ${({ height }) => (height ? height : "100%")};
  flex-direction: ${({ flexDirection }) => flexDirection};
  padding: ${({ padding }) => padding};
  gap: ${({ gap }) => gap};
`;

const Text = styled.p<Pick<CSSProperties, "fontSize" | "color" | "fontWeight">>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => (color ? color : "#000")};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export const CartUI = { Flex, Text, Wrap } as const;
