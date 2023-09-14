import styled from "@emotion/styled";
import { CSSProperties } from "react";

const Wrapper = styled.section<
  Pick<CSSProperties, "alignItems" | "justifyContent" | "height">
>`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  gap: 26px;
  height: ${({ height }) => (height ? height : "auto")};
  width: 100%;
`;
const Flex = styled.div<
  Pick<
    CSSProperties,
    "gap" | "flexDirection" | "alignItems" | "width" | "justifyContent"
  >
>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "column"};
  width: ${({ width }) => (width ? width : "100%")};
  justify-content: ${({ justifyContent }) => justifyContent};
`;
const FormWrap = styled.form`
  width: 100%;
`;
const Label = styled.label`
  color: #353535;
  font-size: 14px;
`;

const Text = styled.p<
  Pick<CSSProperties, "fontSize" | "textAlign" | "fontWeight" | "color">
>`
  font-size: ${({ fontSize }) => fontSize};
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
`;

export const AuthUI = { Wrapper, Label, Flex, Text, FormWrap } as const;