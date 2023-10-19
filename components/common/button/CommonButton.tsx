import { Button, ButtonProps, styled } from "@mui/material";
import { CSSProperties } from "react";

type CommonButtonProps = {
  width?: string;
  height?: string;
  backgroundcolor?: string;
};

const CommonButton = ({
  children,
  color = "secondary",
  variant = "text",
  width,
  height,
  backgroundcolor,
  ...rest
}: ButtonProps & CommonButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      color={color}
      width={width}
      height={height}
      backgroundcolor={backgroundcolor}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(Button)<CommonButtonProps>`
  width: ${({ width }) => (width ? width : "47px")};
  height: ${({ height }) => (height ? height : "45px")};
  background-color: ${({ backgroundcolor }) =>
    backgroundcolor ? backgroundcolor : "#DD8037"};
  color: #fff;
`;
export default CommonButton;
