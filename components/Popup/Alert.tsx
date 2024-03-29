import styled from "@emotion/styled";
import CommonButton from "@/components/ui/Button/CommonButton";
import { ModalUI } from "./style";

type AlertProps = {
  title?: string;
  message?: string;
  btnText?: string;
  close?: () => void;
};
const Alert = ({ title, message, btnText, close }: AlertProps) => {
  return (
    <StyledWrap>
      <StyledOverlay onClick={close}></StyledOverlay>
      <StyledContent>
        <StyledTitle>{title}</StyledTitle>
        <ModalUI.Message>{message}</ModalUI.Message>
        <StyledConfirmBtn onClick={close} width="100%" backgroundcolor="#dd8037">
          <ModalUI.Title>{btnText}</ModalUI.Title>
        </StyledConfirmBtn>
      </StyledContent>
    </StyledWrap>
  );
};

const StyledWrap = styled.div``;
const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgb(0 0 0 / 65%);
`;
const StyledContent = styled.div`
  position: fixed;
  display: grid;
  gap: 16px;
  top: 50%;
  left: 70%;
  padding: 16px;
  min-width: 287px;
  max-width: 400px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;
const StyledTitle = styled.h3`
  text-align: center;
`;

const StyledConfirmBtn = styled(CommonButton)`
  flex: 1;
  height: 24px;
  border-radius: 4px;
  cursor: pointer;
  height: 36px;
`;

export default Alert;
