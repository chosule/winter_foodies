import DefaultLayout from "@/components/layouts/Default";
import useContextModal from "@/context/hooks/useContextModal";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useLogin from "@/hooks/auth/useAuth";
import { useForm, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TAuthCodeSchema, authCodeSchema } from "@/components/login/schema";
import { TFindIdResponse } from "@/types/api/findIdType";
import { AuthUI } from "@/components/login/style";
import CommonInfoBox from "@/components/ui/CommonBox/CommonInfoBox";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import CommonButton from "@/components/ui/Button/CommonButton";
import TextField from "@/components/ui/Input/CommonInput";
import useValid from "@/hooks/auth/useValid";

const FindIdPage = () => {
  const modal = useContextModal();
  const router = useRouter();
  const [dataEmail, setDataEmail] = useState();
  const { findIdApi } = useLogin();
  const [form , setForm] = useState({
    phoneNumber:"",
    authCode:""
  })

  const [completeSubmit , setCompleteSubmit] = useState({
    phoneComplete:false,
    authCodeComplete:false
  })

  const {
    isValidState : phoneNumberIsValidState,
    validText : phoneNumberValidState 
  } = useValid({phoneNumber: form.phoneNumber})

  const{
    isValidState : certiNumberValidState,
    validText : certiNumberValidText
  } = useValid({authCode: form.authCode})


  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<TAuthCodeSchema>({
    resolver: zodResolver(authCodeSchema),
  });

  const handlePhoneAuth = () =>{
    console.log('핸드폰인증');
  }
  useEffect(() => {
    if (dataEmail !== undefined) {
      openAlert(dataEmail);
    }
  }, [dataEmail]);

  const onSubmit: SubmitHandler<TAuthCodeSchema> = (data) => {
    findIdApi.mutate(data, {
      onSuccess: (res) => {
        console.log("res--->", res);
        setDataEmail(res.email);
        router.push("/login");
      },
      onError: (err) => {
        console.log("err", err);
      },
    });
  };

  const onError: SubmitErrorHandler<TAuthCodeSchema> = (error) => {
    console.log("error --->", error);
  };

  const openAlert = () => {
    modal.openAlert({
      title: "알림",
      message: `회원님의아이디는 \n ${dataEmail}입니다. \n 로그인페이지로 이동합니다.`,
      btnText: "확인",
    });
  };
  const openNotice = () => {
    modal.openNotice({
      title: "알림",
      message: `핸드폰 번호가 \n 전송되었습니다.`,
      btnText: "확인",
    });
  };
  return (
    <>
    <HeaderLayout headerTitle="아이디찾기" />
    <AuthUI.Wrapper>
      <AuthUI.Flex gap="26px">
        <CommonInfoBox infotitle="등록된 휴대폰 번호로 찾기" />
        <AuthUI.Flex>
          <AuthUI.Flex flex="0.8">
            <AuthUI.FormWrap onSubmit={handleSubmit(onSubmit, onError)}>
              <AuthUI.Flex gap="10px">
                <AuthUI.Flex gap="10px">
                  <AuthUI.Label>핸드폰번호</AuthUI.Label>
                  <AuthUI.Flex gap="20px" flexDirection="initial">
                    <AuthUI.Flex>
                      <TextField
                        // {...register("phoneNumber", {
                        //   required: true,
                        // })}
                        onChange={(e) => setForm({...form,phoneNumber: e.target.value})}
                        placeholder="핸드폰번호를 입력해주세요."
                        errorMsg={errors.phoneNumber?.message}
                      />
                    </AuthUI.Flex>
                    <CommonButton variant="contained" onClick={handlePhoneAuth}>인증</CommonButton>
                  </AuthUI.Flex>
                </AuthUI.Flex>
                <AuthUI.Flex gap="10px">
                  <AuthUI.Label>인증번호</AuthUI.Label>
                  <AuthUI.Flex gap="20px" flexDirection="initial">
                    <AuthUI.Flex>
                      <TextField
                        // {...register("authCode", {
                        //   required: true,
                        // })}
                        onChange={(e) => setForm({...form,phoneNumber: e.target.value})}
                        placeholder="인증번호를 입력해주세요."
                        errorMsg={errors.authCode?.message}
                      />
                    </AuthUI.Flex>
                    <CommonButton
                      variant="contained"
                      type="submit"
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
FindIdPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default FindIdPage;
