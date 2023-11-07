import HeaderLayout from "@/components/layouts/HeaderLayout";
import { AuthUI } from "../../style";
import TextField from "@/components/common/Input/CommonInput";
import CommonButton from "@/components/common/Button/CommonButton";
import { useForm, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import CommonInfoBox from "@/components/common/CommonBox/CommonInfoBox";
import {
  TSendAuthCodePhoneNumber,
  TSignUpSchema,
  sendAuthCodePhoneNumber,
  signUpSchema,
} from "@/components/Login/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useContextModal from "@/context/hooks/useContextModal";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useProjectApi } from "@/context/hooks/useDataContextApi";
import useLogin from "@/hooks/auth/useAuth";
import { useState } from "react";
import useValid from "@/hooks/auth/useValid";
import useAuthModal from "@/hooks/modal/useAuthModal";
import WinterFoodClient from "@/api/winterFoodClient";

const SignUp = () => {

  const { signUpApi, phoneAuthApi, certiAuthApi } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });
  const {
    openAlert,
    openPhoneModal,
    openPhoneErrorModal,
    phoneAuthError404,
    openAuthCodeModal,
    openAuthCodeErrorModal,
    openAuthCodeCompleteModal,
  } = useAuthModal();

  const [form, setForm] = useState({
    phoneNumber: "",
    authCode: "",
  });
  const [completeSubmit, setCompleteSubmit] = useState({
    phoneComplete: false,
    AuthCodeComplete: false,
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

  const PhoneNumberCodeMutate = (phoneNumber) => {
    phoneAuthApi.mutate(phoneNumber, {
      onSuccess: (res) => {
        openPhoneModal();
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
        AuthCodeComplete: true,
      });
      openAuthCodeModal();
    } else {
      openAuthCodeErrorModal();
    }
  };

  const certiCodeMutate = (data) => {
    certiAuthApi.mutate(data, {
      onSuccess: (res) => {
        console.log("res", res);
      },
      onError: (err) => {
        console.log("err", err);
      },
    });
  };
  const onSubmit: SubmitHandler<TSignUpSchema> = (data) => {
    signUpApi.mutate(data, {
      onSuccess: (res) => {
        console.log("res", res);
      },
    });
  };
  const onError: SubmitErrorHandler<TSignUpSchema> = (error) => {
    console.log("error", error);
  };

  // const openAlert = () => {
  //   modal.openAlert({
  //     title: "알림",
  //     message: `회원가입이 완료되었습니다. \n 로그인페이지로 이동합니다.`,
  //     btnText: "확인",
  //   });
  // };
  return (
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
                    val
                    onChange={(e) =>
                      setForm({ ...form, phoneNumber: e.target.value })
                    }
                    isValidState={phoneNumberIsValidState.isPhoneNumberAuthCode}
                    // {...phoneNumberRegister("phoneNumber", { required: true })}
                    // errorMsg={errors.phoneNumber?.message}
                  />
                </AuthUI.Flex>
                <CommonButton
                  variant="contained"
                  onClick={phoneSubmit}
                  // type="submit"
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
                    placeholder="인증번호를 입력해주세요."
                    value={form.authCode}
                    onChange={(e) =>
                      setForm({ ...form, authCode: e.target.value })
                    }
                    validText={certiNumberValidText}
                    isValidState={certiNumberValidState.isCertiCode}
                    // {...register("SignUpCertiNumber", { required: true })}
                    // errorMsg={errors.SignUpCertiNumber?.message}
                  />
                </AuthUI.Flex>
                <CommonButton
                  variant="contained"
                  type="submit"
                  name="submitbutton"
                  onClick={authCertiSubmit}
                  // disabled={!isDirty || !isValid}
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
