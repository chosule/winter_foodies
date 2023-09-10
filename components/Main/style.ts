import styled from "@emotion/styled";
import { CSSProperties } from "react";

const Wrapper = styled.section<Pick<CSSProperties, "margin" | "gap">>`
  margin: ${({ margin }) => (margin ? margin : "10px 0 10px")};
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap};
`;

const Flex = styled.div<
  Pick<CSSProperties, "alignItems" | "gap" | "flexDirection" | "justifyContent">
>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
`;

const Text = styled.p<Pick<CSSProperties, "fontSize" | "textAlign">>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "12px")};
  color: ${({ color }) => (color ? color : "#353535")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
`;

export const MainUI = {
  Wrapper,
  Flex,
  Text,
} as const;
