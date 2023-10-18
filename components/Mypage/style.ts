import styled from "@emotion/styled";
import { CSSProperties } from "react";

const Flex = styled.div<
  Pick<CSSProperties, "alignItems" | "flexDirection" | "justifyContent">
>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
`;
const Text = styled.p<Pick<CSSProperties, "fontSize" | "fontWeight" | "color">>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
`;

export const MyPageUI = { Text, Flex } as const;