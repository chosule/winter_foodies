import DefaultLayout from "@/components/layouts/Default";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import { AuthUI } from "@/components/Login/style";
import CommonInfoBox from "@/components/ui/CommonBox/CommonInfoBox";
import TextField from "@/components/ui/Input/CommonInput";
import { useForm, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TSignUpSchema, signUpSchema } from "@/components/login/schema";
import useAuthModal from "@/hooks/modal/useAuthModal";
import { useState } from "react";
import useValid from "@/hooks/auth/useValid";
import CommonButton from "@/components/ui/Button/CommonButton";
import useAuthApi from "@/hooks/auth/useLogin";
import { CertifiCodeRequest } from "@/types/api/certifiCodeType";
import { useRouter } from "next/router";
import { Form } from "../find-id";

const SignUpPage = () => {
  const { signUpApi, phoneCertiSignApi, certiAuthApi } = useAuthApi();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });
  const {
    openPhoneModal,
    openPhoneErrorModal,
    phoneAuthError404,
    phoneAuthError409,
    openAuthCodeModal,
    openAuthCodeErrorModal,
    signUpModal,
  } = useAuthModal();

  const [form, setForm] = useState<Form>({
    phoneNumber: "",
    authCode: "",
  });
  const [completeSubmit, setCompleteSubmit] = useState({
    phoneComplete: false,
    authCodeComplete: false,
  });

  const {
    isValidState: phoneNumberIsValidState,
    validText: phoneNumberValidText,
  } = useValid({ phoneNumber: form.phoneNumber });

  const {
    isValidState: certiNumberValidState,
    validText: certiNumberValidText,
  } = useValid({ authCode: form.authCode });

  const phoneSubmit = () => {
    if (phoneNumberIsValidState.isPhoneNumberAuthCode === true) {
      PhoneNumberCodeMutate(form.phoneNumber);
      setCompleteSubmit({ ...completeSubmit, phoneComplete: true });
    } else {
      openPhoneErrorModal();
    }
  };

  const PhoneNumberCodeMutate = (phoneNumber: string) => {
    phoneCertiSignApi.mutate(phoneNumber, {
      onSuccess: (res) => {
        openPhoneModal(res.authCode || "");
      },
      onError: (err) => {
        console.log(err);
        if (err.response?.status === 404) {
          phoneAuthError404();
        }
      },
    });
  };

  const authCertiSubmit = () => {
    if (certiNumberValidState.isCertiCode === true) {
      certiCodeMutate(form);
      setCompleteSubmit({
        ...completeSubmit,
        authCodeComplete: true,
      });
      openAuthCodeModal();
    } else {
      openAuthCodeErrorModal();
    }
  };

  const certiCodeMutate = (data: CertifiCodeRequest) => {
    certiAuthApi.mutate(data, {
      onSuccess: (res) => {
        console.log("res");
      },
      onError: (err) => {
        console.log("err", err);
        if (err.response?.status === 409) {
          phoneAuthError404();
        }
      },
    });
  };
  const onSubmit: SubmitHandler<TSignUpSchema> = (data) => {
    signUpApi.mutate(
      {
        email: data.email,
        password: data.password,
        username: data.username,
        phoneNumber: form.phoneNumber,
      },
      {
        onSuccess: (res) => {
          signUpModal();
          router.push("/");
        },
        onError: (err) => {
          if (err.response?.status === 409) {
            phoneAuthError409();
          }
        },
      }
    );
  };

  const onError: SubmitErrorHandler<TSignUpSchema> = (error) => {
    console.log("error", error);
  };

  return (
    <>
      <>
        <AuthUI.Wrapper height="100%">
          <HeaderLayout headerTitle="회원가입" />
          <CommonInfoBox infotitle="회원정보를 입력해주세요" />
          <AuthUI.FormWrap
            gap="12px"
            minHeight="calc(100vh - 445px)"
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            <AuthUI.Flex gap="10px" flexDirection="column">
              <AuthUI.Flex gap="10px">
                <AuthUI.Label>아이디</AuthUI.Label>
                <TextField
                  placeholder="아이디를 입력해주세요."
                  {...register("email", { required: true })}
                  errorMsg={errors.email?.message}
                />
              </AuthUI.Flex>
              <AuthUI.Flex gap="10px">
                <AuthUI.Label>닉네임</AuthUI.Label>
                <TextField
                  placeholder="이름을 입력해주세요."
                  {...register("username", { required: true })}
                  errorMsg={errors.username?.message}
                />
              </AuthUI.Flex>
              <AuthUI.Flex gap="10px">
                <AuthUI.Label>휴대폰번호</AuthUI.Label>
                <AuthUI.Flex gap="20px" flexDirection="initial">
                  <AuthUI.Flex>
                    <TextField
                      placeholder="휴대폰 번호를 입력해주세요."
                      value={form.phoneNumber}
                      validText={phoneNumberValidText}
                      onChange={(e) =>
                        setForm({ ...form, phoneNumber: e.target.value })
                      }
                      isValidState={
                        phoneNumberIsValidState.isPhoneNumberAuthCode
                      }
                    />
                  </AuthUI.Flex>
                  <CommonButton variant="contained" onClick={phoneSubmit}>
                    인증
                  </CommonButton>
                </AuthUI.Flex>
              </AuthUI.Flex>
              <AuthUI.Flex gap="10px">
                <AuthUI.Label>인증번호</AuthUI.Label>
                <AuthUI.Flex gap="20px" flexDirection="initial">
                  <AuthUI.Flex>
                    <TextField
                      placeholder="인증번호를 입력해주세요."
                      value={form.authCode}
                      onChange={(e) =>
                        setForm({ ...form, authCode: e.target.value })
                      }
                      validText={certiNumberValidText}
                      isValidState={certiNumberValidState.isCertiCode}
                    />
                  </AuthUI.Flex>
                  <CommonButton
                    variant="contained"
                    type="submit"
                    name="submitbutton"
                    onClick={authCertiSubmit}
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
    </>
  );
};

SignUpPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default SignUpPage;
