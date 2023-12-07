import styled from "@emotion/styled";
import { CSSProperties } from "react";

const Wrapper = styled.section<
  Pick<CSSProperties, "alignItems" | "justifyContent" | "height" | "minHeight">
>`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  gap: 32px;
  height: ${({ height }) => (height ? height : "auto")};
  min-height:${({minHeight}) => minHeight};
  width: 100%;
`;
const Flex = styled.div<
  Pick<
    CSSProperties,
    | "gap"
    | "flexDirection"
    | "alignItems"
    | "width"
    | "justifyContent"
    | "flex"
    | "height"
  >
>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "column"};
  width: ${({ width }) => (width ? width : "100%")};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex: ${({ flex }) => flex};
  height: ${({ height }) => height};
`;
const FormWrap = styled.form<
  Pick<CSSProperties, "height" | "flex" | "minHeight" | "gap">
>`
  width: 100%;
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) =>
    minHeight ? minHeight : "calc( 100vh - 344px );"};
  flex: ${({ flex }) => flex};
  gap: ${({ gap }) => gap};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
