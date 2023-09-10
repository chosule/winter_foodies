import styled from "@emotion/styled";
import { CSSProperties } from "react";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
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
  font-size: 12px;
`;

export const LoginUI = { Wrapper, Label, Flex } as const;
