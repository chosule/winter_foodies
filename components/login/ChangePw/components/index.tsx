import CommonInfoBox from "@/components/common/CommonBox/CommonInfoBox";
import { AuthUI } from "../../style";
import TextField from "@/components/common/Input/CommonInput";
import {
  changePasswordSchema,
  TChangePasswordSchema,
} from "./../../schema/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import CommonButton from "@/components/common/Button/CommonButton";
import { useRouter } from "next/router";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import useContextModal from "@/context/hooks/useContextModal";

const ChangePassword = () => {
  const router = useRouter();
  const modal = useContextModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit: SubmitHandler<TChangePasswordSchema> = (data) => {
    console.log("data", data);
    openAlert();
    router.push("/login");
  };

  const onError: SubmitErrorHandler<TChangePasswordSchema> = (error) => {
    console.log("error", error);
  };

  const openAlert = () => {
    modal.openAlert({
      title: "알림",
      message: `비밀번호가 변경되었습니다. \n 로그인페이지로 이동합니다.`,
      btnText: "확인",
    });
  };
  return (
    <>
      <HeaderLayout headerTitle="비밀번호 변경" />
      <AuthUI.Wrapper height="100%">
        <AuthUI.Flex gap="26px" height="100%">
          <CommonInfoBox infotitle="새로운 비밀번호를 입력해주세요" />
          <AuthUI.FormWrap
            onSubmit={handleSubmit(onSubmit, onError)}
            height="100%"
          >
            <AuthUI.Flex gap="10px" flex="0.7">
              <AuthUI.Flex gap="10px">
                <AuthUI.Label>새비밀번호</AuthUI.Label>
                <AuthUI.Flex>
                  <TextField
                    type="password"
                    {...register("changePassword")}
                    placeholder="새로운 비밀번호를 입력해주세요."
                    errorMsg={errors.changePassword?.message}
                  />
                </AuthUI.Flex>
              </AuthUI.Flex>
              <AuthUI.Flex gap="10px">
                <AuthUI.Label>비밀번호 확인</AuthUI.Label>
                <AuthUI.Flex>
                  <TextField
                    {...register("changePasswordConfirm")}
                    placeholder="새로운 비밀번호를 다시 입력해주세요."
                    errorMsg={errors.changePasswordConfirm?.message}
                    type="password"
                  />
                </AuthUI.Flex>
              </AuthUI.Flex>
            </AuthUI.Flex>
            <AuthUI.Flex flex="0.3">
              <CommonButton width="100%" variant="contained" type="submit">
                비밀번호 변경
              </CommonButton>
            </AuthUI.Flex>
          </AuthUI.FormWrap>
        </AuthUI.Flex>
      </AuthUI.Wrapper>
    </>
  );
};

export default ChangePassword;
