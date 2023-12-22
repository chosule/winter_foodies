import styled from "@emotion/styled";
import { CSSProperties } from "react";
import CommonButton from "../ui/Button/CommonButton";

const Flex = styled.div<
  Pick<
    CSSProperties,
    | "alignItems"
    | "lineHeight"
    | "flexDirection"
    | "justifyContent"
    | "padding"
    | "gap"
    | "width"
    | "margin"
  >
>`
  display: flex;
  margin: ${({ margin }) => margin};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
  position: relative;
  padding: ${({ padding }) => padding};
  gap: ${({ gap }) => gap};
  width: ${({ width }) => width};
  line-height: ${({ lineHeight }) => lineHeight};
`;
const Content = styled.div<Pick<CSSProperties, "minWidth" | "padding">>`
  position: fixed;
  display: grid;
  gap: 16px;
  top: 50%;
  right: -35px;
  padding: ${({ padding }) => (padding ? padding : "16px")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "287px")};
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgb(0 0 0 / 65%);
`;

const Text = styled.p<Pick<CSSProperties, "fontWeight" | "fontSize">>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
`;


const Title = styled.h3`
  text-align: center;
`;

const ConfirmBtn = styled(CommonButton)`
  flex: 1;
  height: 24px;
  border-radius: 4px;
  cursor: pointer;
  height: 36px;
`;

const Message = styled.p`
  color: #353535;
  font-weight: 300;
  text-align: center;
  font-size: 13px;
  white-space: pre-line;
`;
export const ModalUI = { Content, Flex, Overlay, Text ,Title,ConfirmBtn,Message};
