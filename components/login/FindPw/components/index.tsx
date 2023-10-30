import CommonInfoBox from "@/components/common/CommonBox/CommonInfoBox";
import { AuthUI } from "../../style";
import TextField from "@/components/common/Input/CommonInput";
import {
  findPasswordSchema,
  TFindPasswordSchema,
  TSendAuthCodePhoneNumber,
} from "./../../schema/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import CommonButton from "@/components/common/Button/CommonButton";
import { useRouter } from "next/router";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import useContextModal from "@/context/hooks/useContextModal";
import {
  TPhoneCertiRequest,
  TPhoneCertiResponse,
} from "@/types/api/phoneCertificationType";
import { AxiosError } from "axios";
import { useProjectApi } from "@/context/hooks/useDataContextApi";
import { useMutation } from "@tanstack/react-query";
import useLogin from "@/hooks/auth/useAuth";
import { forwardRef, useEffect, useState } from "react";
import useValid from "@/hooks/auth/useValid";
import useAuthModal from "@/hooks/modal/useAuthModal";
const FindPassword = () => {
  const router = useRouter();
  const { phoneAuthApi, certiAuthApi, findPwApi } = useLogin();
  const {
    openAlert,
    openPhoneModal,
    openPhoneErrorModal,
    openAuthCodeModal,
    openAuthCodeErrorModal,
    openAuthCodeCompleteModal,
  } = useAuthModal();
  const [completeSubmit, setCompleteSubmit] = useState({
    phoneComplete: false,
    AuthCodeComplete: false,
  });

  const [form, setForm] = useState({
    phoneNumber: "",
    authCode: "",
  });

  const {
    isValidState: phoneNumberIsValidState,
    validText: phoneNumberValidText,
  } = useValid({ phoneNumber: form.phoneNumber });

  const {
    isValidState: certiNumberValidState,
    validText: certiNumberValidText,
  } = useValid({ authCode: form.authCode });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<TFindPasswordSchema>({
    resolver: zodResolver(findPasswordSchema),
  });

  const phoneSubmit = () => {
    if (phoneNumberIsValidState.isPhoneNumberAuthCode === true) {
      PhoneNumberCodeMutate(form.phoneNumber);
      openPhoneModal();
      setCompleteSubmit({ ...completeSubmit, phoneComplete: true });
    } else {
      openPhoneErrorModal();
    }
  };

  const PhoneNumberCodeMutate = (phoneNumber) => {
    phoneAuthApi.mutate(phoneNumber, {
      onSuccess: (res) => {
        console.log("핸드폰인증 success --> ", res);
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
        console.log("인증코드 success ===>", res);
      },
    });
  };

  const onSubmit: SubmitHandler<TFindPasswordSchema> = (data) => {
    if (completeSubmit.phoneComplete && completeSubmit.AuthCodeComplete) {
      findPwApi.mutate(data, {
        onSuccess: (res) => {
          console.log("전체전송submit 확인", res);
          openAlert();
          router.push({
            pathname: `/login/change-pw`,
            query: res,
          });
        },
      });
    } else {
      openAuthCodeCompleteModal();
    }
  };

  const onError: SubmitErrorHandler<TFindPasswordSchema> = (error) => {
    console.log("error", error);
  };

  return (
    <>
      <HeaderLayout headerTitle="비밀번호 찾기" />
      <AuthUI.Wrapper>
        <CommonInfoBox infotitle="등록된 휴대폰 번호로 비밀번호 찾기" />
        <AuthUI.FormWrap onSubmit={handleSubmit(onSubmit, onError)}>
          <AuthUI.Flex gap="10px">
            <AuthUI.Flex gap="10px">
              <AuthUI.Label>가입된 이메일</AuthUI.Label>
              <AuthUI.Flex>
                <TextField
                  {...register("email")}
                  placeholder="가입된 이메일을 입력해주세요."
                  errorMsg={errors.email?.message}
                />
              </AuthUI.Flex>
            </AuthUI.Flex>
            <AuthUI.Flex gap="10px">
              <AuthUI.Label>이름</AuthUI.Label>
              <AuthUI.Flex>
                <TextField
                  {...register("username")}
                  placeholder="이름을 입력해주세요."
                  errorMsg={errors.username?.message}
                />
              </AuthUI.Flex>
            </AuthUI.Flex>
            <AuthUI.Flex gap="10px">
              <AuthUI.Label>휴대폰 번호</AuthUI.Label>
              <AuthUI.Flex gap="20px" flexDirection="initial">
                <AuthUI.Flex>
                  <TextField
                    type="phoneNumber"
                    value={form.phoneNumber}
                    onChange={(e) =>
                      setForm({ ...form, phoneNumber: e.target.value })
                    }
                    placeholder="휴대폰 번호를 입력해주세요."
                    validText={phoneNumberValidText}
                    valueType={"phoneAuthCode"}
                    isValidState={phoneNumberIsValidState.isPhoneNumberAuthCode}
                    // {...register("findPwPhoneNumber", { required: true })}
                    // errorMsg={errors.findPw5PhoneNumber?.message}
                  />
                </AuthUI.Flex>
                <CommonButton
                  variant="contained"
                  onClick={phoneSubmit}
                  isactive={
                    phoneNumberIsValidState.isPhoneNumberAuthCode
                      ? "false"
                      : "true"
                  }
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
                    type="certi"
                    value={form.authCode}
                    onChange={(e) =>
                      setForm({ ...form, authCode: e.target.value })
                    }
                    placeholder="인증번호를 입력해주세요."
                    validText={certiNumberValidText}
                    isValidState={certiNumberValidState.isCertiCode}
                    // {...register("findPwCertiNumber", { required: true })}
                    // errorMsg={errors.findPwCertiNumber?.message}
                  />
                </AuthUI.Flex>
                <CommonButton
                  variant="contained"
                  // type="submit"
                  name="CertiSubmit"
                  onClick={authCertiSubmit}
                  isactive={
                    certiNumberValidState.isCertiCode ? "false" : "true"
                  }
                  // disabled={!isDirty || !isValid}
                >
                  확인
                </CommonButton>
              </AuthUI.Flex>
              <CommonButton variant="contained" type="submit" width="100%">
                비밀번호 찾기
              </CommonButton>
            </AuthUI.Flex>
          </AuthUI.Flex>
        </AuthUI.FormWrap>
      </AuthUI.Wrapper>
    </>
  );
};

export default FindPassword;
