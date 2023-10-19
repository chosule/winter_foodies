import HeaderLayout from "@/components/layouts/HeaderLayout";
import { AuthUI } from "../../style";
import TextField from "@/components/common/Input/CommonInput";
import CommonButton from "@/components/common/Button/CommonButton";
import { useForm, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import CommonInfoBox from "@/components/common/CommonBox/CommonInfoBox";
import { TSignUpSchema, signUpSchema } from "@/components/Login/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useContextModal from "@/context/hooks/useContextModal";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useProjectApi } from "@/context/hooks/useDataContextApi";

const SignUp = () => {
  const modal = useContextModal();
  const router = useRouter();
  const { client } = useProjectApi();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const { mutate } = useMutation((data) => client.signUp(data), {
    onSuccess: (data) => {
      console.log("회원가입success", data);
      openAlert();
      // router.push("/login");
    },
    onError: (error) => {
      console.log("error", error);
    },
  });

  const onSubmit: SubmitHandler<TSignUpSchema> = (data) => {
    mutate(data);
  };
  const onError: SubmitErrorHandler<TSignUpSchema> = (error) => {
    console.log("error", error);
  };

  const openAlert = () => {
    modal.openAlert({
      title: "알림",
      message: `회원가입이 완료되었습니다. \n 로그인페이지로 이동합니다.`,
      btnText: "확인",
    });
  };
  return (
    <>
      <HeaderLayout headerTitle="회원가입" />
      <AuthUI.Wrapper height="100%">
        <CommonInfoBox infotitle="회원정보를 입력해주세요" />
        <AuthUI.FormWrap
          onSubmit={handleSubmit(onSubmit, onError)}
          height="100%"
        >
          <AuthUI.Flex gap="10px" flexDirection="column" flex="0.8">
            <AuthUI.Flex gap="10px">
              <AuthUI.Label>닉네임</AuthUI.Label>
              <TextField
                placeholder="닉네임을 입력해주세요."
                {...register("username", { required: true })}
                errorMsg={errors.username?.message}
              />
            </AuthUI.Flex>
            <AuthUI.Flex gap="10px">
              <AuthUI.Label>아이디</AuthUI.Label>
              <TextField
                placeholder="아이디를 입력해주세요."
                {...register("email", { required: true })}
                errorMsg={errors.email?.message}
              />
            </AuthUI.Flex>
            <AuthUI.Flex gap="10px">
              <AuthUI.Label>휴대폰번호</AuthUI.Label>
              <AuthUI.Flex gap="20px" flexDirection="initial">
                <AuthUI.Flex>
                  <TextField
                    {...register("phoneNumber", { required: true })}
                    placeholder="핸드폰번호를 입력해주세요."
                    errorMsg={errors.phoneNumber?.message}
                  />
                </AuthUI.Flex>
                <CommonButton
                  variant="contained"
                  type="submit"
                  name="submitbutton"
                >
                  인증
                </CommonButton>
              </AuthUI.Flex>
            </AuthUI.Flex>
            <AuthUI.Flex gap="10px">
              <AuthUI.Label>인증번호</AuthUI.Label>
              <AuthUI.Flex gap="20px" flexDirection="initial">
                <AuthUI.Flex>
                  <TextField
                    {...register("SignUpCertiNumber", { required: true })}
                    placeholder="인증번호를 입력해주세요."
                    errorMsg={errors.SignUpCertiNumber?.message}
                  />
                </AuthUI.Flex>
                <CommonButton
                  variant="contained"
                  type="submit"
                  name="submitbutton"
                  disabled={!isDirty || !isValid}
                >
                  확인
                </CommonButton>
              </AuthUI.Flex>
            </AuthUI.Flex>
            <AuthUI.Flex gap="10px">
              <AuthUI.Label>비밀번호</AuthUI.Label>
              <TextField
                type="password"
                placeholder="비밀번호를 입력해주세요."
                {...register("password", { required: true })}
                errorMsg={errors.password?.message}
              />
            </AuthUI.Flex>
            <AuthUI.Flex gap="10px">
              <AuthUI.Label>비밀번호 확인</AuthUI.Label>
              <TextField
                type="password"
                placeholder="비밀번호를 재입력해주세요."
                {...register("signUpPasswordChecking", { required: true })}
                errorMsg={errors.signUpPasswordChecking?.message}
              />
            </AuthUI.Flex>
          </AuthUI.Flex>
          <div>
            <CommonButton type="submit" width="100%" variant="contained">
              회원가입
            </CommonButton>
          </div>
        </AuthUI.FormWrap>
      </AuthUI.Wrapper>
    </>
  );
};

export default SignUp;
