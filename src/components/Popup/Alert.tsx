import styled from "@emotion/styled";
import CommonButton, { Button } from "@/src/components/ui/Button";
import { ModalUI } from "./style";

type AlertProps = {
  title?: string;
  message?: string;
  btnText?: string;
  close?: () => void;
};
const Alert = ({ title, message, btnText, close }: AlertProps) => {
  return (
    <div>
      <div className="modal-overlay" onClick={close}></div>
      <div className="modal-content">
        <h3 className="text-center">{title}</h3>
        <p className="text-[#353535] font-[300] text-center text-[13px] whitespace-pre-line">
          {message}
        </p>
        <Button
          className="flex-[1] h-[24px] rounded-[4px] cursor-pointer h-[36px]"
          onClick={close}
          width="100%"
          bg="#dd8037"
        >
          <h3 className="text-center text-white">{btnText}</h3>
        </Button>
      </div>
    </div>
  );
};

export default Alert;
