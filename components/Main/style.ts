import styled from "@emotion/styled";
import { CSSProperties } from "react";
import CommonBox from "../ui/CommonBox/CommonBox";

const Wrapper = styled.div<
  Pick<CSSProperties, "gap" | "minHeight" | "marginTop">
>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap};
  min-height: ${({ minHeight }) => minHeight};
  margin-top: ${({ marginTop }) => marginTop};
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr;
`;
const Flex = styled.div<
  Pick<
    CSSProperties,
    | "alignItems"
    | "gap"
    | "flexDirection"
    | "justifyContent"
    | "width"
    | "flex"
    | "lineHeight"
  >
>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
  width: ${({ width }) => width};
  flex: ${({ flex }) => flex};
  line-height: ${({ lineHeight }) => lineHeight};
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


const CustomFlex = styled(Flex)`
  cursor: pointer;
  padding-top: 15px;
`;

const CustomBox = styled(CommonBox)`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const MainUI = {
  Wrapper,
  Flex,
  Text,
  Grid,
  CustomFlex,
  CustomBox
} as const;
