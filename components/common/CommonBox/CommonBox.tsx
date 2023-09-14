import styled from "@emotion/styled";
import { CSSProperties } from "react";

type TCommonBoxProps = {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  backgroundColor?: string;
};
const CommonBox = ({
  children,
  width,
  height,
  backgroundColor,
  ...props
}: TCommonBoxProps) => {
  return (
    <>
      <StyledBox
        {...props}
        width={width}
        height={height}
        backgroundColor={backgroundColor}
      >
        {children}
      </StyledBox>
    </>
  );
};

const StyledBox = styled.div<
  Pick<TCommonBoxProps, "width" | "height"> & { backgroundColor?: string }
>`
  width: ${({ width }) => (width ? width : "55px")};
  height: ${({ height }) => (height ? height : "55px")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#DD8037"};
  border-radius: 10px;
`;
export default CommonBox;