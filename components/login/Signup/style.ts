import styled from "@emotion/styled";
import { CSSProperties } from "react";

const Wrapper = styled.section``;

const Flex = styled.div<Pick<CSSProperties, "flexDirection">>`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "column"};
`;
const Label = styled.label`
  font-size: 12px;
`;
export const SignUpUI = {
  Wrapper,
  Label,
  Flex,
} as const;
