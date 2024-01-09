import styled from "@emotion/styled";
import Modal from "react-modal";
import CommonButton from "@/components/ui/Button/CommonButton";
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
        <StyledButton onClick={onClose} backgroundcolor="#853C0D" width="80%">
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
  background-color: #fff;
  border: 1px solid #ddd;
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  margin-left: 13em;
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
