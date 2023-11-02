import styled from "@emotion/styled";
import { CSSProperties } from "react";

const Wrapper = styled.div<Pick<CSSProperties, "gap" | "minHeight">>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap};
  min-height: ${({ minHeight }) => minHeight};
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr;
`;
const Flex = styled.div<
  Pick<
    CSSProperties,
    "alignItems" | "gap" | "flexDirection" | "justifyContent" | "width" | "flex"
  >
>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
  width: ${({ width }) => width};
  flex: ${({ flex }) => flex};
`;

const Text = styled.p<
  Pick<CSSProperties, "fontSize" | "textAlign" | "lineHeight" | "fontWeight">
>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "15px")};
  color: ${({ color }) => (color ? color : "#353535")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  line-height: ${({ lineHeight }) => lineHeight};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export const MainUI = {
  Wrapper,
  Flex,
  Text,
  Grid,
} as const;
