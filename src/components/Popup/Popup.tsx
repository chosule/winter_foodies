import styled from "@emotion/styled";
import Modal from "react-modal";
import CommonButton, { Button } from "@/src/components/ui/Button";
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
      <div className="modal-wrap" isOpen={isOpen}>
        <p>{title}</p>
        <p>{children}</p>
        <Button onClick={onClose} bg="#853C0D" width="80%">
          확인
        </Button>
      </div>
    </>
  );
};

export default Popup;
