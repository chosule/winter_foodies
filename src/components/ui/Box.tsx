import styled from "@emotion/styled";
import { CSSProperties } from "react";

type Props = {
  width?: string;
  height?: string;
  bg?: string;
};
const Box = ({
  children,
  className,
  width,
  height,
  bg,
  ...props
}: React.ComponentProps<"div"> & Props) => {
  return (
    <>
      <div
        className={`w-[${width}] h-[${height}] bg-[${bg}] rounded-[10px] ${className}`}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default Box;
