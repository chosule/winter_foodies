import Head from "next/head";
import { Children } from "@/types/commons";
import styled from "@emotion/styled";

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
  width: 511px;
  background-color: #fcce8a;
  position: relative;
  height: 100%;
`;
export const StyledContent = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100%;
`;

export default LoginLayout;
