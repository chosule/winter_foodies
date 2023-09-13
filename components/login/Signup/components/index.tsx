import HeaderLayout from "@/components/layouts/HeaderLayout";
import { AuthUI } from "../../style";
import TextField from "@/components/common/Input/CommonInput";
import CommonButton from "@/components/common/button/CommonButton";
import { useForm, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import CommonInfoBox from "@/components/common/CommonBox/CommonInfoBox";
import { TSignUpSchema, signUpSchema } from "@/components/Login/schema";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<TSignUpSchema> = (data) => {
    console.log(data);
  };
  const onError: SubmitErrorHandler<TSignUpSchema> = (error) => {
    console.log("error", error);
  };
  return (
    <>
      <HeaderLayout headerTitle="회원가입" />
      <AuthUI.Wrapper>
        <CommonInfoBox infotitle="회원정보를 입력해주세요" />
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <AuthUI.Flex gap="10px" flexDirection="column">
            <AuthUI.Flex gap="10px">
              <AuthUI.Label>닉네임</AuthUI.Label>
              <TextField
                placeholder="닉네임을 입력해주세요."
                {...register("signUpNickName", { required: true })}
                errorMsg={errors.signUpNickName?.message}
              />
            </AuthUI.Flex>
            <AuthUI.Flex gap="10px">
              <AuthUI.Label>아이디</AuthUI.Label>
              <TextField
                placeholder="아이디를 입력해주세요."
                {...register("signUpId", { required: true })}
                errorMsg={errors.signUpId?.message}
              />
            </AuthUI.Flex>
            <AuthUI.Flex gap="10px">
              <AuthUI.Label>핸드폰 번호</AuthUI.Label>
              <TextField
                placeholder="핸드폰번호를 입력해주세요."
                {...register("signUpPhoneNumber", { required: true })}
                errorMsg={errors.signUpPhoneNumber?.message}
              />
            </AuthUI.Flex>
            <AuthUI.Flex gap="10px">
              <AuthUI.Label>비밀번호</AuthUI.Label>
              <TextField
                type="password"
                placeholder="비밀번호를 입력해주세요."
                {...register("signUpPassword", { required: true })}
                errorMsg={errors.signUpPassword?.message}
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
          <CommonButton type="submit" width="100%" variant="contained">
            회원가입
          </CommonButton>
        </form>
      </AuthUI.Wrapper>
    </>
  );
};

export default SignUp;
