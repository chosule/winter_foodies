import styled from "@emotion/styled";
import WarningIcon from "@/public/img/WarningIcon";

export const ErrorMsg = ({ errorMsg, ...rest }: { errorMsg: string }) => {
  return (
    <div className="flex py-[10px] ">
      <p className="text-[12px] text-[#ff4d00]" {...rest}>
        {errorMsg}
      </p>
    </div>
  );
};

export const ErrorMessage = ({
  errorMessage,
}: {
  errorMessage: string | undefined;
}) => {
  return (
    <div className="flex py-[10px]">
      <p className="text-[12px] text-[#ff4d00]">{errorMessage}</p>
    </div>
  );
};

export default ErrorMsg;
