import { ErrorMsg, ErrorMessage } from "@/components/ErrorMsg/ErrorMsg";
import styled from "@emotion/styled";
import { InputHTMLAttributes, forwardRef } from "react";

type TTextFieldProps = {
  placeholder?: string;
  errorMessage?: string;
  errorMsg?: string;
  validText?: string;
  valid?: string;
  isValidState?: boolean | null;
  valueType?: string;
  isActive?: string;
};

type TInputAttributes = InputHTMLAttributes<HTMLInputElement> & TTextFieldProps;

const TextField = forwardRef<HTMLInputElement, TInputAttributes>(
  ({ ...props }, ref) => {
    return (
      <StyledWrap>
        <StyledInput
          ref={ref}
          {...props}
          placeholder={props.placeholder}
          type={props.type}
          autoComplete="off"
        />
        {props.errorMsg && <ErrorMsg errorMsg={props.errorMsg} />}
        {!props.isValidState && <ErrorMessage errorMessage={props.validText} />}
      </StyledWrap>
    );
  }
);
TextField.displayName = "TextField";

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const StyledInput = styled.input`
  background-color: #fff;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #dd8037;
  padding: 17px 52px 17px 11px;

  &::placeholder {
    color: #d7d7d7;
    font-size: 16px;
    font-weight: 400;
  }
`;
export default TextField;
