import TextField from "@/components/common/Input/CommonInput";
import { AuthUI } from "../../style";
import CommonButton from "@/components/common/button/CommonButton";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import { useForm, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { TFindIdSchema, findIdSchema } from "@/components/Login/schema/index";
import { zodResolver } from "@hookform/resolvers/zod";
import modal from "@/utils/modal";
import useContextModal from "@/context/hooks/useContextModal";

const FindId = () => {
  const modal = useContextModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFindIdSchema>({
    resolver: zodResolver(findIdSchema),
  });

  const onSubmit: SubmitHandler<TFindIdSchema> = (data) => {
    // console.log("data--->", data);
    openAlert();
  };

  const onError: SubmitErrorHandler<TFindIdSchema> = (error) => {
    console.log("error --->", error);
  };

  const openAlert = () => {
    modal.openAlert({
      title: "알림",
      message: "알림테스트",
      btnText: "고되다",
    });
  };
  return (
    <>
      <HeaderLayout headerTitle="아이디찾기" />
      <AuthUI.Wrapper>
        <AuthUI.FormWrap onSubmit={handleSubmit(onSubmit, onError)}>
          <AuthUI.Flex gap="10px">
            <AuthUI.Flex gap="10px">
              <AuthUI.Label>휴대폰번호</AuthUI.Label>
              <AuthUI.Flex gap="20px" flexDirection="initial">
                <AuthUI.Flex>
                  <TextField
                    {...register("findIdPhoneNumber", { required: true })}
                    placeholder="핸드폰번호를 입력해주세요."
                    errorMsg={errors.findIdPhoneNumber?.message}
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
                    {...register("findIdCertiNumber", { required: true })}
                    placeholder="인증번호를 입력해주세요."
                    errorMsg={errors.findIdCertiNumber?.message}
                  />
                </AuthUI.Flex>
                <CommonButton
                  variant="contained"
                  type="submit"
                  name="submitbutton"
                >
                  확인
                </CommonButton>
              </AuthUI.Flex>
            </AuthUI.Flex>
          </AuthUI.Flex>
        </AuthUI.FormWrap>
        <CommonButton width="100%" variant="contained">
          로그인하기
        </CommonButton>
      </AuthUI.Wrapper>
    </>
  );
};

export default FindId;