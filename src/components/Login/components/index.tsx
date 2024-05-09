"use client";
import Image from "next/image";
import TextField from "@/src/components/ui/CommonInput";
import { AuthUI } from "../style";
import CommonButton, { Button } from "@/src/components/ui/Button";
import styled from "@emotion/styled";
import mainLogoIcon from "@/public/img/mainLogoIcon.png";
import naverIcon from "@/public/img/naverIcon.png";
import { handleKakaoLogin } from "@/src/hooks/auth/useKakaoApi";
import { handleNaverLogin } from "@/src/hooks/auth/useNaverApi";
import { useForm, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { TLoginSchema, loginSchema } from "@/components/login/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import useContextModal from "@/src/context/hooks/useContextModal";
import { useRecoilState } from "recoil";
import { userState } from "@/src/recoil/atom";
import useAuthApi from "@/src/hooks/auth/useLogin";
import kakaoIcon from "@/public/img/kakaoIcon.png";

const Login = () => {
  const modal = useContextModal();
  const router = useRouter();
  const { loginApi } = useAuthApi();
  const [, setToken] = useRecoilState(userState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<TLoginSchema> = (data) => {
    loginApi.mutate(data, {
      onSuccess: (res) => {
        const accessToken = res?.accessToken;
        localStorage.setItem("accessToken", accessToken || "");
        setToken(accessToken || "");
        openAlert();
        router.push("/main");
      },
    });
  };
  const onError: SubmitErrorHandler<TLoginSchema> = (error) => {
    console.log("error", error);
  };

  const openAlert = () => {
    modal.openAlert({
      title: "알림",
      message: `메인페이지로 이동합니다.`,
      btnText: "확인",
    });
  };

  return (
    <div className="items-center flex justify-center h-full min-h-loginDiv">
      <Image src={mainLogoIcon} alt="아이콘" width={300} height={278} />
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="flex gap-[20px] w-fill flex-col">
          <div className="fle-col flex gap-[10px]">
            <div className="flex gap-[10px] flex-col">
              <label className="text-[14px]">아이디</label>
              <TextField
                placeholder="아이디를 입력해 주세요."
                {...register("email", { required: true })}
                errorMsg={errors.email?.message}
              />
            </div>
            <div className="flex gap-[10px] flex-col">
              <label>비밀번호</label>
              <TextField
                placeholder="비밀번호를 입력해 주세요."
                type="password"
                {...register("password", { required: true })}
                errorMsg={errors.password?.message}
              />
            </div>
          </div>
          <Button type="submit" width="100%">
            로그인
          </Button>
        </div>
      </form>
      {/*  */}
      <div className="flex">
        <div className="flex gap-[10px]">
          <p
            className="text-[12px]"
            onClick={() => {
              router.push("/login/find-id");
            }}
          >
            아이디 찾기
          </p>
          <p
            className="text-[12px]"
            onClick={() => {
              router.push("/login/find-pw");
            }}
          >
            비밀번호 찾기
          </p>
        </div>
        <p
          className="text-[12px]"
          onClick={() => {
            router.push("/login/signup");
          }}
        >
          회원가입
        </p>
      </div>
      {/*  */}
      <div className="flex flex-col items-center gap-[10px] min-h-[100px]">
        <p className="text-[10px]">SNS계정으로 간편 로그인/회원가입</p>
        <div className="flex gap-[10px] justify-center">
          <Button onClick={handleKakaoLogin} bg="transparent">
            <Image src={kakaoIcon} alt="카카오톡" width={45} height={45} />
          </Button>
          <Button onClick={handleNaverLogin} bg="transparent">
            <Image src={naverIcon} alt="네이버로그인" width={45} height={45} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
