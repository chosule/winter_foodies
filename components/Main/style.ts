import styled from "@emotion/styled";
import { CSSProperties } from "react";

const Wrapper = styled.section``;

const Flex = styled.div<Pick<CSSProperties, "alignItems" | "gap">>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
`;

const Text = styled.p<Pick<CSSProperties, "fontSize">>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "12px")};
  color: ${({ color }) => color};
  text-align: center;
  color: #353535;
`;

export const MainUI = {
  Wrapper,
  Flex,
  Text,
} as const;
