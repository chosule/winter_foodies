import styled from "@emotion/styled";
import { CSSProperties } from "react";

const Flex = styled.div<
  Pick<
    CSSProperties,
    | "flexDirection"
    | "justifyContent"
    | "gap"
    | "lineHeight"
    | "alignItems"
    | "padding"
    | "height"
    | "width"
  >
>`
  display: flex;
  width: ${({ width }) => width};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  height: ${({ height }) => (height ? height : "100%")};
  flex-direction: ${({ flexDirection }) => flexDirection};
  padding: ${({ padding }) => padding};
  gap: ${({ gap }) => gap};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "1.5")};
`;

const Wrap = styled(Flex)<{ minHeight: string }>`
  width: 100%;
  min-height: ${({ minHeight }) => minHeight};
`;

const Grid = styled.div`
  display: grid;
`;
const Text = styled.p<
  Pick<CSSProperties, "fontSize" | "color" | "fontWeight" | "textAlign">
>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => (color ? color : "#000")};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
  white-space: pre-wrap;
`;

export const CartUI = { Flex, Text, Wrap, Grid } as const;
