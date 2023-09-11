import Image from "next/image";
import TextField from "@/components/common/input/Input";
import { LoginUI } from "../style";
import CommonButton from "@/components/common/button/CommonButton";
import styled from "@emotion/styled";
import mainLogoIcon from "@/public/img/mainLogoIcon.png";
import kakaoIcon from "@/public/img/kakaoIcon.png";
import naverIcon from "@/public/img/naverIcon.png";
const Login = () => {
  return (
    <LoginUI.Wrapper>
      <Image src={mainLogoIcon} alt="아이콘" width={300} height={278} />
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
          <LoginUI.Flex flexDirection="column" alignItems="center" gap="10px">
            <LoginUI.Text fontSize="11px">
              SNS계정으로 간편 로그인/회원가입
            </LoginUI.Text>
            <LoginUI.Flex gap="20px">
              <Image src={kakaoIcon} alt="카카오톡" width={45} height={45} />
              <Image src={naverIcon} alt="카카오톡" width={45} height={45} />
            </LoginUI.Flex>
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
