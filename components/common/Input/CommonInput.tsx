import ErrorMsg from "@/components/ErrorMsg/ErrorMsg";
import useValid from "@/hooks/auth/useValid";
import styled from "@emotion/styled";
import { InputHTMLAttributes, forwardRef } from "react";

type TTextFieldProps = {
  placeholder?: string;
  errorMsg?: string;
  validText?: string;
  valid?: string;
};

type TInputAttributes = InputHTMLAttributes<HTMLInputElement> & TTextFieldProps;

const TextField = forwardRef<HTMLInputElement, TInputAttributes>(
  ({ ...props }, ref) => {
    return (
      <StyledWrap isValid={props.valid}>
        <StyledInput
          ref={ref}
          {...props}
          placeholder={props.placeholder}
          type={props.type}
          autoComplete="off"
        />
        {props.errorMsg && <ErrorMsg errorMsg={props.errorMsg} />}
        {props.validText && <div>{props.validText}1</div>}
      </StyledWrap>
    );
  }
);
TextField.displayName = "TextField";

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
const StyledInput = styled.input`
  background-color: #fafafa;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #d7d7d7;
  padding: 13px 52px 13px 11px;

  &::placeholder {
    color: #d7d7d7;
    font-size: 16px;
    font-weight: 400;
  }
`;
export default TextField;
