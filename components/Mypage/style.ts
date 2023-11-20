import styled from "@emotion/styled";
import { CSSProperties } from "react";

const Flex = styled.div<
  Pick<
    CSSProperties,
    | "alignItems" 
    | "lineHeight"
    | "flexDirection"
    | "justifyContent"
    | "padding"
    | "gap"
    | "width"
    | "margin"
  >
>`
  display: flex;
  margin: ${({ margin }) => margin};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
  position: relative;
  padding: ${({ padding }) => padding};
  gap: ${({ gap }) => gap};
  width: ${({ width }) => width};
  line-height:${({lineHeight}) => lineHeight};
`;
const Text = styled.p<Pick<CSSProperties, "fontSize" | "fontWeight" | "color">>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
`;

export const MyPageUI = { Text, Flex } as const;
