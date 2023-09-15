import styled from "@emotion/styled";
import Modal from "react-modal";
import CommonButton from "../common/button/CommonButton";
import { CSSProperties } from "react";

type TPopupProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
};

Modal.setAppElement("#__next");

const Popup = ({ children, isOpen, onClose, title }: TPopupProps) => {
  return (
    <>
      <StyledModalWrap isOpen={isOpen}>
        <StyledText fontWeight="600">{title}</StyledText>
        <StyledText>{children}</StyledText>
        <StyledButton onClick={onClose} backgroundColor="#853C0D" width="80%">
          확인
        </StyledButton>
      </StyledModalWrap>
    </>
  );
};

const StyledModalWrap = styled(Modal)`
  height: 178px;
  width: 359px;
  border-radius: 17px;
  background-color: #fcce8a;
  border: 1px solid #ddd;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledText = styled.p<Pick<CSSProperties, "fontWeight">>`
  color: #353535;
  font-weight: 300;
  white-space: pre-line;
  text-align: center;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "300")};
`;

const StyledButton = styled(CommonButton)`
  height: 36px;
`;

export default Popup;
