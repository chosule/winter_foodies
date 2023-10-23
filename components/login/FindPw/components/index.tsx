import CommonInfoBox from "@/components/common/CommonBox/CommonInfoBox";
import { AuthUI } from "../../style";
import TextField from "@/components/common/Input/CommonInput";
import { findPasswordSchema, TFindPasswordSchema } from "./../../schema/index";
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

const FindPassword = () => {
  const modal = useContextModal();
  const router = useRouter();
  const { client } = useProjectApi();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<TFindPasswordSchema>({
    resolver: zodResolver(findPasswordSchema),
  });

  const { mutate } = useMutation<
    TPhoneCertiRequest,
    AxiosError,
    TPhoneCertiResponse
  >((data) => client.phoneCertification(data), {
    onSuccess: (data) => {
      console.log("data?", data);
    },
    onError: (err) => {
      console.log("error", err);
    },
  });
  const authCodeSubmit = () => {};

  const authCodePhoneSubmit = (data) => {
    mutate(data);
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
                    {...register("findPwPhoneNumber", { required: true })}
                    placeholder="휴대폰 번호를 입력해주세요."
                    errorMsg={errors.findPwPhoneNumber?.message}
                  />
                </AuthUI.Flex>
                <CommonButton
                  variant="contained"
                  // type="submit"
                  onClick={authCodePhoneSubmit}
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
                  onClick={authCodeSubmit}
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
