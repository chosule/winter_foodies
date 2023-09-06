import Head from "next/head";
import { Children } from "@/types/commons";
import styled from "@emotion/styled";

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
        <StyledContent>{children}</StyledContent>
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

export const StyledContent = styled.div`
  max-width: 360px;
  width: 360px;
  background-color: pink;
  height: 100%;
`;

export default DefaultLayout;
