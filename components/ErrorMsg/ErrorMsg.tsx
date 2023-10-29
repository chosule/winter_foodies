import styled from "@emotion/styled";
import WarningIcon from "@/public/img/WarningIcon";

export const ErrorMsg = ({ errorMsg, ...rest }: { errorMsg: string }) => {
  return (
    <StyleFlex>
      <WarningIcon />
      <StyledError {...rest}>{errorMsg}</StyledError>
    </StyleFlex>
  );
};

export const ErrorMessage = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <StyleFlex>
      {/* <WarningIcon /> */}
      <StyledError>{errorMessage}</StyledError>
    </StyleFlex>
  );
};
const StyleFlex = styled.div`
  display: flex;
  gap: 7px;
`;
const StyledError = styled.p`
  font-size: 12px;
  color: #ff4d00;
`;

export default ErrorMsg;
