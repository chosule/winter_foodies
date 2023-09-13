import { Button, ButtonProps, styled } from "@mui/material";
import { CSSProperties } from "react";

type CommonButtonProps = {
  width?: string;
  backgroundColor?: string;
};

const CommonButton = ({
  children,
  color = "secondary",
  variant = "text",
  width,
  backgroundColor,
  ...rest
}: ButtonProps & CommonButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      color={color}
      width={width}
      backgroundColor={backgroundColor}
      {...rest}
    >
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
  height: ${({ height }) => (height ? height : "45px")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#853C0D"};
  color: #fff;
`;
export default CommonButton;
