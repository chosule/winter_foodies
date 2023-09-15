import styled from "@emotion/styled";
import CommonButton from "../common/Button/CommonButton";

type TAlertProps = {
  title?: string;
  message?: string;
  btnText?: string;
  close?: () => void;
};
const Alert = ({ title, message, btnText, close }: TAlertProps) => {
  return (
    <StyledWrap>
      <StyledOverlay onClick={close}></StyledOverlay>
      <StyledContent>
        <StyledTitle>{title}</StyledTitle>
        <StyledMessage>{message}</StyledMessage>
        <StyledConfirmBtn onClick={close} width="100%">
          <StyledTitle>{btnText}</StyledTitle>
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
  z-index: 999;
  background-color: rgb(0 0 0 / 65%);
`;
const StyledContent = styled.div`
  position: fixed;
  display: grid;
  gap: 16px;
  top: 50%;
  left: 50%;
  padding: 16px;
  min-width: 287px;
  max-width: 400px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #f3f3f3;
  transform: translate(-50%, -50%);
  z-index: 999;
`;
const StyledTitle = styled.h3`
  text-align: center;
`;
const StyledMessage = styled.p`
  color: #353535;
  font-weight: 300;
  text-align: center;
  font-size: 13px;
  white-space: pre-line;
`;
const StyledConfirmBtn = styled(CommonButton)`
  flex: 1;
  height: 24px;
  border-radius: 4px;
  cursor: pointer;
  height: 36px;
`;

export default Alert;
