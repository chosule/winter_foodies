import TextField from "@/components/common/Input/CommonInput";
import { AuthUI } from "../../style";
import CommonButton from "@/components/common/Button/CommonButton";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import { useForm, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { TFindIdSchema, findIdSchema } from "@/components/Login/schema/index";
import { zodResolver } from "@hookform/resolvers/zod";
import modal from "@/utils/modal";
import useContextModal from "@/context/hooks/useContextModal";
import { useRouter } from "next/router";
import CommonInfoBox from "@/components/common/CommonBox/CommonInfoBox";

const FindId = () => {
  const modal = useContextModal();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<TFindIdSchema>({
    resolver: zodResolver(findIdSchema),
  });

  const onSubmit: SubmitHandler<TFindIdSchema> = (data) => {
    // console.log("data--->", data);
    openAlert();
    router.push("/login");
  };

  const onError: SubmitErrorHandler<TFindIdSchema> = (error) => {
    console.log("error --->", error);
  };

  const openAlert = () => {
    modal.openAlert({
      title: "알림",
      message: `회원님의아이디는 \n test@naver.com 입니다. \n 로그인페이지로 이동합니다.`,
      btnText: "확인",
    });
  };
  return (
    <>
      <HeaderLayout headerTitle="아이디찾기" />
      <AuthUI.Wrapper height="100%">
        <AuthUI.Flex gap="26px" height="100%">
          <CommonInfoBox infotitle="등록된 휴대폰 번호로 찾기" />
          <AuthUI.Flex height="100%">
            <AuthUI.Flex flex="0.8">
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
                        disabled={!isDirty || !isValid}
                      >
                        확인
                      </CommonButton>
                    </AuthUI.Flex>
                  </AuthUI.Flex>
                </AuthUI.Flex>
              </AuthUI.FormWrap>
            </AuthUI.Flex>
          </AuthUI.Flex>
        </AuthUI.Flex>
      </AuthUI.Wrapper>
    </>
  );
};

export default FindId;
