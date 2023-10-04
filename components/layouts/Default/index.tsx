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
        <StyledWrapper>
          <MainLeftPc />
          <div>
            <StyledOuter>
              <StyledContent width={width}>{children}</StyledContent>
              <BottomNavigation />
            </StyledOuter>
          </div>
        </StyledWrapper>
      </StyledLayout>
    </div>
  );
};

export const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  gap: 76px;
`;

export const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledOuter = styled.div`
  width: 511px;
  border: 1px solid #e7e7e7;
  position: relative;
  overflow: hidden;
  height: 100%;
`;
export const StyledContent = styled.div<TDefaultLayoutProps>`
  width: ${({ width }) => (width ? width : "90%")};
  margin: 0 auto;
  height: 100%;
  display: flex;
  gap: 30px;
  flex-direction: column;
`;

export default DefaultLayout;
