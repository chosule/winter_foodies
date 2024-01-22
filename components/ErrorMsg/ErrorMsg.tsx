import styled from "@emotion/styled";
import WarningIcon from "@/public/img/WarningIcon";

export const ErrorMsg = ({ errorMsg, ...rest }: { errorMsg: string }) => {
  return (
    <StyleFlex>
      <StyledError {...rest}>{errorMsg}</StyledError>
    </StyleFlex>
  );
};

export const ErrorMessage = ({ errorMessage }: { errorMessage: string | undefined}) => {
  return (
    <StyleFlex>
      <StyledError>{errorMessage}</StyledError>
    </StyleFlex>
  );
};
const StyleFlex = styled.div`
  display: flex;
  padding:10px 0;
`;
const StyledError = styled.p`
  font-size: 12px;
  color: #ff4d00;
`;

export default ErrorMsg;
