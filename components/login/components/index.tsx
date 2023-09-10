import Image from "next/image";
import icon1 from "@/public/img/icon1.png";
import TextField from "@/components/common/input/Input";
import { LoginUI } from "../style";
import CommonButton from "@/components/common/button/CommonButton";
import styled from "@emotion/styled";
const Login = () => {
  return (
    <LoginUI.Wrapper>
      <Image src={icon1} alt="아이콘" />
      <form action="">
        <LoginUI.Flex gap="20px" flexDirection="column">
          <LoginUI.Flex flexDirection="column" gap="10px">
            <LoginUI.Flex gap="10px" flexDirection="column">
              <LoginUI.Label>아이디</LoginUI.Label>
              <TextField placeholder="아이디를 입력해 주세요." />
            </LoginUI.Flex>
            <LoginUI.Flex gap="10px" flexDirection="column">
              <LoginUI.Label>비밀번호</LoginUI.Label>
              <TextField placeholder="비밀번호를 입력해 주세요." />
            </LoginUI.Flex>
          </LoginUI.Flex>
          <StyleButton type="submit">로그인</StyleButton>
          <LoginUI.Flex flexDirection="column">
            <div>SNS계정으로 간편 로그인/회원가입</div>
            <StyleButton type="submit">카카오톡로그인</StyleButton>
            <StyleButton type="submit">네이버로그인</StyleButton>
          </LoginUI.Flex>
        </LoginUI.Flex>
      </form>
    </LoginUI.Wrapper>
  );
};

const StyleButton = styled(CommonButton)`
  width: 100%;
`;

export default Login;
