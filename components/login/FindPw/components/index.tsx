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
import { useState } from "react";
import useValid from "@/hooks/auth/useValid";

const FindPassword = () => {
  const modal = useContextModal();

  const router = useRouter();
  const { phoneAuthApi } = useLogin();
  const [form, setForm] = useState({
    phoneNumber: "",
  });
  const [test, setText] = useState("");
  const { isValidState, validText } = useValid(form);
  console.log("isValidState-->", isValidState);
  // console.log("validText", validText);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<TFindPasswordSchema>({
    resolver: zodResolver(findPasswordSchema),
  });

  const authCodePhoneSubmit = ({ phoneNumber }) => {
    phoneAuthApi.mutate(phoneNumber, {
      onSuccess: (res) => {
        // console.log("핸드폰인증 success --> ", res);
      },
    });
  };
  const onSubmit: SubmitHandler<TFindPasswordSchema> = (data) => {
    openAlert();
    router.push("/login/change-pw");
  };

  const onError: SubmitErrorHandler<TFindPasswordSchema> = (error) => {
    console.log("error", error);
  };

  const openAlert = () => {
    modal.openAlert({
      title: "알림",
      message: "비밀번호가 확인되어 변경 페이지로 넘어갑니다.",
      btnText: "확인",
    });
  };
  const openNotice = () => {
    modal.openNotice({
      title: "알림",
      message: "핸드폰 번호가 전송되었습니다.",
      btnText: "확인",
    });
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
                  {...register("findPwEmail")}
                  placeholder="가입된 이메일을 입력해주세요."
                  errorMsg={errors.findPwEmail?.message}
                />
              </AuthUI.Flex>
            </AuthUI.Flex>
            <AuthUI.Flex gap="10px">
              <AuthUI.Label>이름</AuthUI.Label>
              <AuthUI.Flex>
                <TextField
                  {...register("findPwName")}
                  placeholder="이름을 입력해주세요."
                  errorMsg={errors.findPwName?.message}
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
                    validText={validText}
                    valueType={"phoneNumber"}
                    // {...register("findPwPhoneNumber", { required: true })}
                    // errorMsg={errors.findPw5PhoneNumber?.message}
                  />
                </AuthUI.Flex>
                <CommonButton
                  variant="contained"
                  onClick={() => {
                    authCodePhoneSubmit(form.phoneNumber);
                  }}
                  isactive={isValidState.isPhoneNumberAuthCode ? false : true}
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
                    {...register("findPwCertiNumber", { required: true })}
                    placeholder="인증번호를 입력해주세요."
                    errorMsg={errors.findPwCertiNumber?.message}
                  />
                </AuthUI.Flex>
                <CommonButton
                  variant="contained"
                  // type="submit"
                  name="CertiSubmit"
                  disabled={!isDirty || !isValid}
                >
                  확인
                </CommonButton>
              </AuthUI.Flex>
            </AuthUI.Flex>
          </AuthUI.Flex>
        </AuthUI.FormWrap>
      </AuthUI.Wrapper>
    </>
  );
};

export default FindPassword;
