import { Button, ButtonProps, styled } from "@mui/material";
import { CSSProperties } from "react";

const CommonButton = ({
  children,
  color = "secondary",
  variant = "text",
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} color={color} {...rest}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(Button)<
  Pick<
    CSSProperties,
    | "width"
    | "height"
    | "backgroundImage"
    | "fontSize"
    | "color"
    | "backgroundColor"
  >
>`
  width: ${({ width }) => (width ? width : "47px")};
  height: ${({ height }) => (height ? height : "49px")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#DD8037"};
  color: #fff;
`;
export default CommonButton;
