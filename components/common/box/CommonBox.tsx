import styled from "@emotion/styled";
import { CSSProperties } from "react";

type TCommonBoxProps = {
  children?: React.ReactNode;
  width?: string;
  backgroundColor?: string;
};
const CommonBox = ({
  children,
  width,
  backgroundColor,
  ...props
}: TCommonBoxProps) => {
  return (
    <>
      <StyledBox {...props} width={width} backgroundColor={backgroundColor}>
        {children}
      </StyledBox>
    </>
  );
};

const StyledBox = styled.div<
  Pick<TCommonBoxProps, "width"> & { backgroundColor?: string }
>`
  width: ${({ width }) => (width ? width : "91px")};
  height: 91px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#DD803721"};
  border-radius: 10px;
`;
export default CommonBox;
