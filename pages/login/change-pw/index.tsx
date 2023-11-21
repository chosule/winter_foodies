import DefaultLayout from "@/components/layouts/Default";
import useContextModal from "@/context/hooks/useContextModal";
import useLogin from "@/hooks/auth/useAuth";
import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { TChangePasswordSchema, changePasswordSchema } from "@/components/login/schema";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import { AuthUI } from "@/components/login/style";
import CommonInfoBox from "@/components/ui/CommonBox/CommonInfoBox";
import TextField from "@/components/ui/Input/CommonInput";
import CommonButton from "@/components/ui/Button/CommonButton";

const ChangePwPage = () => {
  const router = useRouter();
  const modal = useContextModal();
  const { changePwApi } = useLogin();
  // console.log("router", router.query.id);

  const userId = router.query.id;

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<TChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit: SubmitHandler<TChangePasswordSchema> = () => {
    const newPassword = getValues("changePassword");
    const data = { newPassword, userId };
    console.log("특정 데이터: ", data);
    changePwApi.mutate(data, {
      onSuccess: (res) => {
        console.log("res", res);
        openAlert();
        router.push("/login");
      },
    });
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
          <AuthUI.Flex>
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

ChangePwPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default ChangePwPage;
