import Head from "next/head";
import { Children } from "@/types/commons";
import styled from "@emotion/styled";
import BottomNavigation from "@/components/layouts/BottomNavigation/BottomNavigation";
type TDefaultLayoutProps = {
  children: Children;
};
const DefaultLayout = ({ children }: TDefaultLayoutProps) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <StyledLayout>
        <StyledOuter>
          <StyledContent>{children}</StyledContent>
          <BottomNavigation />
        </StyledOuter>
      </StyledLayout>
    </div>
  );
};

export const StyledLayout = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledOuter = styled.div`
  width: 360px;
  background-color: #f3f3f3;
  height: 100%;
`;
export const StyledContent = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export default DefaultLayout;
