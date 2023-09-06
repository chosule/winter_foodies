import { Button, ButtonProps, styled } from "@mui/material";

const CommonButton = ({ children, ...rest }: ButtonProps) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

const StyledButton = styled(Button)`
  background-color: red;
`;
export default CommonButton;
