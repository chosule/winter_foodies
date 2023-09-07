import styled from "@emotion/styled";

const ErrorMsg = ({ errorMsg, ...rest }: { errorMsg: string }) => {
  return <StyledError {...rest}>{errorMsg}</StyledError>;
};
const StyledError = styled.p`
  font-size: 12px;
  color: #ff4d00;
`;
export default ErrorMsg;
