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
  className?: string;
};

const TextField = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & Props
>(({ ...props }, ref) => {
  return (
    <>
      <input
        className={`w-full rounded-md border-color-orange border ${props.className}`}
        ref={ref}
        placeholder={props.placeholder}
        type={props.type}
        {...props}
      />
      {/* {props.errorMsg && <ErrorMsg errorMsg={props.errorMsg} />} */}
      {/* {!props.isValidState && <ErrorMessage errorMessage={props.validText} />} */}
    </>
  );
});
TextField.displayName = "TextField";

export default TextField;
