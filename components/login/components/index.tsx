import Image from "next/image";
import TextField from "@/components/common/input/Input";
import { LoginUI } from "../style";
import CommonButton from "@/components/common/button/CommonButton";
import styled from "@emotion/styled";
import mainLogoIcon from "@/public/img/mainLogoIcon.png";
import kakaoIcon from "@/public/img/kakaoIcon.png";
import naverIcon from "@/public/img/naverIcon.png";
import { CSSProperties } from "react";
import { handleKakaoLogin } from "@/hooks/auth/useKakaoApi";
import { handleNaverLogin } from "@/hooks/auth/useNaverApi";
import { useForm, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { TLoginSchema } from "@/components/login/schema";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchema>();

  const onSubmit = () => {
    console.log("제출");
  };

  const onError = () => {
    console.log("에러발생");
  };
  return (
    <LoginUI.Wrapper>
      <Image src={mainLogoIcon} alt="아이콘" width={300} height={278} />
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <LoginUI.Flex gap="20px" flexDirection="column">
          <LoginUI.Flex flexDirection="column" gap="10px">
            <LoginUI.Flex gap="10px" flexDirection="column">
              <LoginUI.Label>아이디</LoginUI.Label>
              <TextField
                placeholder="아이디를 입력해 주세요."
                {...register("id", { required: true })}
              />
            </LoginUI.Flex>
            <LoginUI.Flex gap="10px" flexDirection="column">
              <LoginUI.Label>비밀번호</LoginUI.Label>
              <TextField
                placeholder="비밀번호를 입력해 주세요."
                type="password"
                {...register("password", { required: true })}
                errorMsg={errors.password?.message}
              />
            </LoginUI.Flex>
          </LoginUI.Flex>
          <StyleButton type="submit" variant="contained">
            로그인
          </StyleButton>
          {/*  */}
          <LoginUI.Flex flexDirection="column" alignItems="center" gap="10px">
            <LoginUI.Text fontSize="11px">
              SNS계정으로 간편 로그인/회원가입
            </LoginUI.Text>
            <LoginUI.Flex gap="20px">
              <StyleButton onClick={handleKakaoLogin} backgroundColor="none">
                <Image src={kakaoIcon} alt="카카오톡" width={45} height={45} />
              </StyleButton>
              <StyleButton onClick={handleNaverLogin} backgroundColor="none">
                <Image
                  src={naverIcon}
                  alt="네이버로그인"
                  width={45}
                  height={45}
                />
              </StyleButton>
            </LoginUI.Flex>
          </LoginUI.Flex>
        </LoginUI.Flex>
      </form>
      <StyledLinkText fontSize="12px">회원가입 하러 가기</StyledLinkText>
    </LoginUI.Wrapper>
  );
};

const StyleButton = styled(CommonButton)<
  Pick<CSSProperties, "backgroundColor">
>`
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const StyledLinkText = styled(LoginUI.Text)`
  text-decoration: underline;
  cursor: pointer;
`;
export default Login;
