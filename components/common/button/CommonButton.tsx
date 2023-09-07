import { Button, ButtonProps, styled } from "@mui/material";
import { CSSProperties } from "react";

const CommonButton = ({
  children,
  color = "secondary",
  variant = "contained",
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} color={color} {...rest}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(Button)<
  Pick<CSSProperties, "width" | "height"> & { disableHoverEffect?: boolean }
>`
  width: ${({ width }) => (width ? width : "47px")};
  height: ${({ height }) => (height ? height : "49px")};

  &:hover {
    ${({ disableHoverEffect }) => disableHoverEffect && "background-color:  ;"}
  }
`;
export default CommonButton;
