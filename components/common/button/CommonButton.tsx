import { Button, ButtonProps, styled } from "@mui/material";

const CommonButton = ({
  children,
  color = "primary",
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton color={color} {...rest}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  background-color: red;
`;
export default CommonButton;
