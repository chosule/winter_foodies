import DefaultLayout from "@/src/components/layouts/Default";
import useValid from "@/src/hooks/auth/useValid";
import useAuthModal from "@/src/hooks/modal/useAuthModal";
import { useRouter } from "next/router";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TFindPasswordSchema,
  findPasswordSchema,
} from "@/src/components/login/schema";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import HeaderLayout from "@/src/components/layouts/HeaderLayout";
import { AuthUI } from "@/src/components/Login/style";
import CommonInfoBox from "@/src/components/ui/CommonInfoBox";
import TextField from "@/src/components/ui/CommonInput";
import CommonButton from "@/src/components/ui/Button";
import useAuthApi from "@/src/hooks/auth/useLogin";
import { Form } from "../find-id/page";

const FindPwPage = () => {
  const router = useRouter();
  const { phoneCertiFindApi, certiAuthApi, findPwApi } = useAuthApi();
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

  const [form, setForm] = useState<Form>({
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
      setCompleteSubmit({ ...completeSubmit, phoneComplete: true });
    } else {
      openPhoneErrorModal();
    }
  };

  const PhoneNumberCodeMutate = (phoneNumber: string) => {
    phoneCertiFindApi.mutate(phoneNumber, {
      onSuccess: (res) => {
        console.log("핸드폰인증 success --> ", res);
        openPhoneModal(res.authCode || "");
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
    } else {
      openAuthCodeErrorModal();
    }
  };

  const certiCodeMutate = (data: Form) => {
    certiAuthApi.mutate(data, {
      onSuccess: (res) => {
        openAuthCodeModal();
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
            query: res as any,
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
        <AuthUI.FormWrap onSubmit={handleSubmit(onSubmit, onError)} gap="35px">
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
                    value={form.phoneNumber}
                    onChange={(e) =>
                      setForm({ ...form, phoneNumber: e.target.value })
                    }
                    placeholder="휴대폰 번호를 입력해주세요."
                    validText={phoneNumberValidText}
                    valueType={"phoneAuthCode"}
                    isValidState={phoneNumberIsValidState.isPhoneNumberAuthCode}
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
                    value={form.authCode}
                    onChange={(e) =>
                      setForm({ ...form, authCode: e.target.value })
                    }
                    placeholder="인증번호를 입력해주세요."
                    validText={certiNumberValidText}
                    isValidState={certiNumberValidState.isCertiCode}
                  />
                </AuthUI.Flex>
                <div>
                  <CommonButton
                    variant="contained"
                    // type="submit"
                    name="CertiSubmit"
                    onClick={authCertiSubmit}
                    isactive={
                      certiNumberValidState.isCertiCode ? "false" : "true"
                    }
                  >
                    확인
                  </CommonButton>
                </div>
              </AuthUI.Flex>
            </AuthUI.Flex>
          </AuthUI.Flex>
          <CommonButton variant="contained" type="submit" width="100%">
            비밀번호 찾기
          </CommonButton>
        </AuthUI.FormWrap>
      </AuthUI.Wrapper>
    </>
  );
};

export default FindPwPage;
