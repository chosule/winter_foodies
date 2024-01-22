import { Button, ButtonProps, styled } from "@mui/material";
import { CSSProperties } from "react";

type CommonButtonProps = {
  width?: string;
  height?: string;
  backgroundcolor?: string;
  isactive?: string;
};

const CommonButton = ({
  children,
  color = "secondary",
  variant = "text",
  width,
  height,
  isactive,
  backgroundcolor,
  ...rest
}: ButtonProps & CommonButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      color={color}
      backgroundColor={backgroundcolor}
      width={width}
      height={height}
      // isActive={isactive}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(Button)<Pick<CSSProperties,"height" | "width" | "borderRadius" | "backgroundColor">>`
  width: ${({ width }) => (width ? width : "47px")};
  height: ${({ height }) => (height ? height : "45px")};
  color: #fff;
  border-radius:10px;
  background-color:${({backgroundColor}) => backgroundColor};
`;
export default CommonButton;
