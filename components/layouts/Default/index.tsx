import Head from "next/head";
import { Children } from "@/types/commons";
import styled from "@emotion/styled";
import BottomNavigation from "@/components/layouts/BottomNavigation/BottomNavigation";
import MainLeftPc from "@/components/Main/components/MainLeftPc";

type TDefaultLayoutProps = {
  children: Children;
  width?: string;
};
const DefaultLayout = ({ children, width }: TDefaultLayoutProps) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <StyledLayout>
        <MainLeftPc />
        <StyledOuter>
          <StyledContent width={width}>{children}</StyledContent>
          <BottomNavigation />
        </StyledOuter>
      </StyledLayout>
    </div>
  );
};

export const StyledWrapper = styled.div`
  display: flex;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const StyledOuter = styled.div`
  max-width: 511px;
  width: 100%;
  border: 1px solid #e7e7e7;
  margin-left: 700px;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0.1) 0px 4px 6px, rgba(0, 0, 0, 0.15) 0px 8px 30px;
  @media (max-width: 970px) {
    margin-left: 360px;
  }
  @media (max-width: 600px) {
    margin-left: 0;
  }
`;
export const StyledContent = styled.div<TDefaultLayoutProps>`
  width: ${({ width }) => (width ? width : "90%")};
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default DefaultLayout;
