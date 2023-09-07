import { Button, ButtonProps, styled } from "@mui/material";
import { CSSProperties } from "react";
import Image from "next/image"; // next/image를 불러옵니다.

type CommonButtonProps = ButtonProps & {
  backgroundImage?: StaticImageData;
};

const CommonButton = ({
  children,
  color = "secondary",
  variant = "contained",
  backgroundImage,
  ...rest
}: CommonButtonProps) => {
  return (
    <StyledButton variant={variant} color={color} {...rest}>
      {backgroundImage && <Image src={backgroundImage} alt={`아이콘`} />}
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(Button)<
  Pick<
    CSSProperties,
    "width" | "height" | "backgroundImage" | "fontSize" | "color"
  >
>`
  width: ${({ width }) => (width ? width : "47px")};
  height: ${({ height }) => (height ? height : "49px")};
  background-image: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage.src})` : "none"};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "12px")};
  color: ${({ color }) => (color ? color : "#747474 ")};
`;
export default CommonButton;
