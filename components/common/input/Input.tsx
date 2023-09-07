import ErrorMsg from "@/components/ErrorMsg/ErrorMsg";
import styled from "@emotion/styled";
import { InputHTMLAttributes, forwardRef } from "react";

type TTextFieldProps = {
  placeholder?: string;
  errorMsg?: string;
};

type TInputAttributes = InputHTMLAttributes<HTMLInputElement> & TTextFieldProps;

const TextField = forwardRef<HTMLInputElement, TInputAttributes>(
  ({ ...props }, ref) => {
    return (
      <>
        <StyledInput
          ref={ref}
          {...props}
          placeholder={props.placeholder}
          type={props.type}
          autoComplete="off"
        />
        {props.errorMsg && <ErrorMsg errorMsg={props.errorMsg} />}
      </>
    );
  }
);

const StyledInput = styled.input`
  background-color: #fafafa;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #d7d7d7;
  padding: 17px 52px 17px 11px;

  &::placeholder {
    color: #d7d7d7;
    font-size: 16px;
    font-weight: 400;
  }
`;
export default TextField;
