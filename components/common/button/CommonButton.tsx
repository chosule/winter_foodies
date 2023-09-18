import { Button, ButtonProps, styled } from "@mui/material";
import { CSSProperties } from "react";

type CommonButtonProps = {
  width?: string;
  height?: string;
  backgroundColor?: string;
};

const CommonButton = ({
  children,
  color = "secondary",
  variant = "text",
  width,
  height,
  backgroundColor,
  ...rest
}: ButtonProps & CommonButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      color={color}
      width={width}
      height={height}
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
    backgroundColor ? backgroundColor : "#DD8037"};
  color: #fff;
`;
export default CommonButton;
