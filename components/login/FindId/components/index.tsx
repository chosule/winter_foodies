import TextField from "@/components/common/Input/CommonInput";
import { AuthUI } from "../../style";
import CommonButton from "@/components/common/button/CommonButton";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import { useForm, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { TFindIdSchema, findIdSchema } from "@/components/Login/schema/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Popup from "@/components/Popup/Popup";
const FindId = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFindIdSchema>({
    resolver: zodResolver(findIdSchema),
  });
  const [showPopup, setShowPopup] = useState<boolean | undefined>(false);
  const [showPopupPhoneNumber, setShowPopupPhoneNumber] = useState<
    boolean | undefined
  >(false);

  const onSubmit: SubmitHandler<TFindIdSchema> = (data) => {
    console.log("data--->", data);
    setShowPopup(true);
  };
  const onError: SubmitErrorHandler<TFindIdSchema> = (error) => {
    console.log("error --->", error);
  };
  const onSubmitPhone: SubmitHandler<TFindIdSchema> = (data) => {
    console.log("핸드폰번호 submit", data);
    setShowPopupPhoneNumber(true);
  };
  const onErrorPhone: SubmitErrorHandler<TFindIdSchema> = (error) => {
    console.log("핸드폰번호 error", error);
  };
  return (
    <>
      {showPopup && (
        <>
          <Popup
            isOpen={showPopup}
            title="알림"
            onClose={() => setShowPopup(false)}
          >
            {`회원님의 아이디는 test@naver.com 입니다.`}
          </Popup>
        </>
      )}
      {showPopupPhoneNumber && (
        <>
          <Popup
            isOpen={showPopupPhoneNumber}
            title="알림"
            onClose={() => setShowPopupPhoneNumber(false)}
          >{`인증번호가 전송되었습니다.`}</Popup>
        </>
      )}
      <HeaderLayout headerTitle="아이디찾기" />
      <AuthUI.Wrapper>
        <AuthUI.Flex gap="10px">
          <AuthUI.FormWrap onSubmit={handleSubmit(onSubmitPhone, onErrorPhone)}>
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
                <CommonButton variant="contained" type="submit">
                  인증
                </CommonButton>
              </AuthUI.Flex>
            </AuthUI.Flex>
          </AuthUI.FormWrap>
          <AuthUI.FormWrap onSubmit={handleSubmit(onSubmit, onError)}>
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
                <CommonButton variant="contained" type="submit">
                  확인
                </CommonButton>
              </AuthUI.Flex>
            </AuthUI.Flex>
          </AuthUI.FormWrap>
        </AuthUI.Flex>
        <CommonButton width="100%">로그인하기</CommonButton>
      </AuthUI.Wrapper>
    </>
  );
};

export default FindId;
