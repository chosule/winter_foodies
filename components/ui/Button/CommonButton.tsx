import { Button, ButtonProps, styled } from "@mui/material";
import { CSSProperties } from "react";

type CommonButtonProps = {
  width?: string;
  height?: string;
  backgroundcolor?: string;
  isactive?: () => void;
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
      backgroundcolor={backgroundcolor}
      width={width}
      height={height}
      isactive={isactive}
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
  background-color:${({backgroundcolor}) => backgroundcolor};
`;
export default CommonButton;
