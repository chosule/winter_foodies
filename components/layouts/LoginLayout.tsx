import Head from "next/head";
import { Children } from "@/types/commons";
import styled from "@emotion/styled";
import BottomNavigation from "@/components/layouts/BottomNavigation/BottomNavigation";
import Header from "./HeaderLayout";
type TDefaultLayoutProps = {
  children: Children;
};
const LoginLayout = ({ children }: TDefaultLayoutProps) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <StyledLayout>
        <StyledOuter>
          <StyledContent>{children}</StyledContent>
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
  background-color: #fcce8a;
  height: 100%;
  position: relative;
`;
export const StyledContent = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100%;
`;

export default LoginLayout;
