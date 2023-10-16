import Image from "next/image";
import TextField from "@/components/common/Input/CommonInput";
import { AuthUI } from "../style";
import CommonButton from "@/components/common/Button/CommonButton";
import styled from "@emotion/styled";
import mainLogoIcon from "@/public/img/mainLogoIcon.png";
import kakaoIcon from "@/public/img/kakaoIcon.png";
import naverIcon from "@/public/img/naverIcon.png";
import { handleKakaoLogin } from "@/hooks/auth/useKakaoApi";
import { handleNaverLogin } from "@/hooks/auth/useNaverApi";
import { useForm, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { TLoginSchema, loginSchema } from "@/components/Login/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useProjectApi } from "@/context/hooks/useDataContextApi";
import { useMutation } from "@tanstack/react-query";
import useContextModal from "@/context/hooks/useContextModal";
import { TLoginResponse } from "@/types/api/loginType";
import { AxiosError } from "axios";
import { TDataApiContext } from "@/context/hooks/useDataContextApi";
import { useEffect } from "react";

const Login = () => {
  const modal = useContextModal();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const { client } = useProjectApi();

  const onLoginSuccess = (res) => {
    console.log("로그인 성공 ->", res);
    const accessToken = res.data.accessToken;
    console.log("엑세스토큰", accessToken);

    // localStorage에 accessToken 저장
    localStorage.setItem("accessToken", accessToken);

    openAlert();
    router.push("/");
  };

  const mutation = useMutation<TLoginResponse, AxiosError, string>(
    (data) => client.login(data),
    {
      onSuccess: onLoginSuccess,
      onError: (error) => {
        console.error("로그인 에러 ->", error);
      },
    }
  );

  const onSubmit: SubmitHandler<TLoginSchema> = (data) => {
    mutation.mutate(data);
  };

  const onError: SubmitErrorHandler<TLoginSchema> = (error) => {
    console.log(error);
  };

  const openAlert = () => {
    modal.openAlert({
      title: "알림",
      message: `메인페이지로 이동합니다.`,
      btnText: "확인",
    });
  };

  return (
    <AuthUI.Wrapper alignItems="center" justifyContent="center" height="100%">
      <Image src={mainLogoIcon} alt="아이콘" width={300} height={278} />
      <AuthUI.FormWrap onSubmit={handleSubmit(onSubmit, onError)}>
        <AuthUI.Flex gap="20px" flexDirection="column">
          <AuthUI.Flex flexDirection="column" gap="10px">
            <AuthUI.Flex gap="10px" flexDirection="column">
              <AuthUI.Label>아이디</AuthUI.Label>
              <TextField
                placeholder="아이디를 입력해 주세요."
                {...register("usernameOrEmail", { required: true })}
                errorMsg={errors.usernameOrEmail?.message}
              />
            </AuthUI.Flex>
            <AuthUI.Flex gap="10px" flexDirection="column">
              <AuthUI.Label>비밀번호</AuthUI.Label>
              <TextField
                placeholder="비밀번호를 입력해 주세요."
                type="password"
                {...register("password", { required: true })}
                errorMsg={errors.password?.message}
              />
            </AuthUI.Flex>
          </AuthUI.Flex>
          <CommonButton type="submit" variant="contained" width="100%">
            로그인
          </CommonButton>
        </AuthUI.Flex>
      </AuthUI.FormWrap>
      {/*  */}
      <AuthUI.Flex flexDirection="initial">
        <AuthUI.Flex gap="10px" flexDirection="initial">
          <StyledLinkText
            fontSize="12px"
            onClick={() => {
              router.push("/login/find-id");
            }}
          >
            아이디 찾기
          </StyledLinkText>
          <StyledLinkText
            fontSize="12px"
            onClick={() => {
              router.push("/login/find-pw");
            }}
          >
            비밀번호 찾기
          </StyledLinkText>
        </AuthUI.Flex>
        <StyledLinkText
          fontSize="12px"
          onClick={() => {
            router.push("/login/signup");
          }}
        >
          회원가입
        </StyledLinkText>
      </AuthUI.Flex>
      {/*  */}
      <AuthUI.Flex flexDirection="column" alignItems="center" gap="10px">
        <AuthUI.Text fontSize="10px">
          SNS계정으로 간편 로그인/회원가입
        </AuthUI.Text>
        <AuthUI.Flex
          gap="10px"
          width="inherit"
          justifyContent="center"
          flexDirection="initial"
        >
          <CommonButton onClick={handleKakaoLogin}>
            <Image src={kakaoIcon} alt="카카오톡" width={45} height={45} />
          </CommonButton>
          <CommonButton onClick={handleNaverLogin}>
            <Image src={naverIcon} alt="네이버로그인" width={45} height={45} />
          </CommonButton>
        </AuthUI.Flex>
      </AuthUI.Flex>
    </AuthUI.Wrapper>
  );
};

const StyledLinkText = styled(AuthUI.Text)`
  cursor: pointer;
`;
export default Login;
