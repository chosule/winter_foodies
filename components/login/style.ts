import styled from "@emotion/styled";
import { CSSProperties } from "react";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 26px;
`;
const Flex = styled.div<
  Pick<CSSProperties, "gap" | "flexDirection" | "alignItems">
>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ flexDirection }) => flexDirection};
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
  text-decoration: $;
`;

export const LoginUI = { Wrapper, Label, Flex, Text } as const;
