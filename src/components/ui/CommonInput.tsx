import { ErrorMsg, ErrorMessage } from "@/src/components/ErrorMsg/ErrorMsg";
import { InputHTMLAttributes, forwardRef } from "react";

type Props = {
  placeholder?: string;
  errorMessage?: string;
  errorMsg?: string;
  validText?: string;
  valid?: string;
  isValidState?: boolean | null;
  valueType?: string;
  isActive?: string;
};

type TInputAttributes = InputHTMLAttributes<HTMLInputElement> & Props;

const TextField = forwardRef<HTMLInputElement, TInputAttributes>(
  ({ ...props }, ref) => {
    return (
      <div className="flex flex-col w-full">
        <input
          className="input"
          ref={ref}
          placeholder={props.placeholder}
          type={props.type}
          autoComplete="off"
          {...props}
        />
        {props.errorMsg && <ErrorMsg errorMsg={props.errorMsg} />}
        {!props.isValidState && <ErrorMessage errorMessage={props.validText} />}
      </div>
    );
  }
);
TextField.displayName = "TextField";

export default TextField;
