import { Button, ButtonProps, styled } from "@mui/material";

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
  backgroundcolor,
  isactive,
  ...rest
}: ButtonProps & CommonButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      color={color}
      width={width}
      height={height}
      backgroundcolor={backgroundcolor}
      isactive={isactive}
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
